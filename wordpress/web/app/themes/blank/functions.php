<?php

/**
 * React functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package React
 */

if (!function_exists('react_setup')) :
  /**
   * Sets up theme defaults and registers support for various WordPress features.
   *
   * Note that this function is hooked into the after_setup_theme hook, which
   * runs before the init hook. The init hook is too late for some features, such
   * as indicating support for post thumbnails.
   */
  function react_setup()
  {
    //creating functions post_remove for removing menu item
    function post_remove()
    {
      remove_menu_page('edit.php');
    }

    add_action('admin_menu', 'post_remove');

    // Add default posts and comments RSS feed links to head.
    add_theme_support('automatic-feed-links');

    /*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
    add_theme_support('title-tag');

    /*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
    add_theme_support('post-thumbnails');

    // This theme uses wp_nav_menu() in one location.
    register_nav_menus(array(
      'menu-primary' => "Primary",
      'menu-social' => "Social",
      'menu-footer' => "Footer",
    ));

    /*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
    add_theme_support('html5', array(
      'gallery',
      'caption',
    ));

    // Set up the WordPress core custom background feature.
    add_theme_support('custom-background', apply_filters('react_custom_background_args', array(
      'default-color' => 'ffffff',
      'default-image' => '',
    )));

    // Add theme support for selective refresh for widgets.
    add_theme_support('customize-selective-refresh-widgets');

    /**
     * Add support for core custom logo.
     *
     * @link https://codex.wordpress.org/Theme_Logo
     */
    add_theme_support('custom-logo', array(
      'height'      => 250,
      'width'       => 250,
      'flex-width'  => true,
      'flex-height' => true,
    ));

    add_image_size('gallery-vertical', 640, 1080, true);

    update_option('thumbnail_size_w', 640);
    update_option('thumbnail_size_h', 640);

    function timymcd_block_formats($arr)
    {
      $arr['block_formats'] = 'Paragraph=p;Heading 2=h2;Heading 3=h3;Heading 4=h4;';
      return $arr;
    }
    add_filter('tiny_mce_before_init', 'timymcd_block_formats');

    function cptui_register_my_cpts_gallery()
    {

      /**
       * Post Type: Galeries.
       */

      $labels = [
        "name" => esc_html__("Galeries", "react"),
        "singular_name" => esc_html__("Galerie", "react"),
        "menu_name" => esc_html__("Galeries", "react"),
        "all_items" => esc_html__("Toutes les galeries", "react"),
        "add_new" => esc_html__("Ajouter", "react"),
        "add_new_item" => esc_html__("Ajouter une nouvelle galerie", "react"),
        "edit_item" => esc_html__("Éditer la galerie", "react"),
        "new_item" => esc_html__("Nouvelle galerie", "react"),
        "view_item" => esc_html__("Voir la galerie", "react"),
        "view_items" => esc_html__("Voir les galeries", "react"),
        "search_items" => esc_html__("Recherches dans les galeries", "react"),
        "not_found" => esc_html__("Aucune galerie", "react"),
        "not_found_in_trash" => esc_html__("Aucune galerie dans la corbeille", "react"),
        "parent" => esc_html__("Galerie parente:", "react"),
        "featured_image" => esc_html__("Featured image for this Galerie", "react"),
        "set_featured_image" => esc_html__("Set featured image for this Galerie", "react"),
        "remove_featured_image" => esc_html__("Remove featured image for this Galerie", "react"),
        "use_featured_image" => esc_html__("Use as featured image for this Galerie", "react"),
        "archives" => esc_html__("Galerie archives", "react"),
        "insert_into_item" => esc_html__("Insert into Galerie", "react"),
        "uploaded_to_this_item" => esc_html__("Upload to this Galerie", "react"),
        "filter_items_list" => esc_html__("Filter Galeries list", "react"),
        "items_list_navigation" => esc_html__("Galeries list navigation", "react"),
        "items_list" => esc_html__("Liste des galeries", "react"),
        "attributes" => esc_html__("Galeries attributes", "react"),
        "name_admin_bar" => esc_html__("Galerie", "react"),
        "item_published" => esc_html__("Galerie publiée", "react"),
        "item_published_privately" => esc_html__("Galerie published privately.", "react"),
        "item_reverted_to_draft" => esc_html__("Galerie reverted to draft.", "react"),
        "item_scheduled" => esc_html__("Galerie programmée", "react"),
        "item_updated" => esc_html__("Galerie mise à jour.", "react"),
        "parent_item_colon" => esc_html__("Galerie parente:", "react"),
      ];

      $args = [
        "label" => esc_html__("Galeries", "react"),
        "labels" => $labels,
        "description" => "",
        "public" => true,
        "publicly_queryable" => true,
        "show_ui" => true,
        "show_in_rest" => true,
        "rest_base" => "",
        "rest_controller_class" => "WP_REST_Posts_Controller",
        "rest_namespace" => "wp/v2",
        "has_archive" => false,
        "show_in_menu" => true,
        "show_in_nav_menus" => true,
        "delete_with_user" => false,
        "exclude_from_search" => false,
        "capability_type" => "post",
        "map_meta_cap" => true,
        "hierarchical" => false,
        "can_export" => false,
        "rewrite" => ["slug" => "galerie", "with_front" => true],
        "query_var" => true,
        "menu_icon" => "dashicons-images-alt",
        "supports" => ["title", "editor"],
        "show_in_graphql" => true,
        "graphql_single_name" => "Galerie",
        "graphql_plural_name" => "Galeries",
      ];

      register_post_type("gallery", $args);
    }

    add_action('init', 'cptui_register_my_cpts_gallery');

    add_filter(
      'theme_page_templates',
      function ($page_templates, $theme, $post) {
        $page_templates["y-service-template.php"] = "Homepage";
        return $page_templates;
      },
      11,
      3
    );


    add_filter(
      'wpgraphql_acf_register_graphql_field',
      function ($return, $type_name, $field_name, $config) {
        $acf_field = $config['acf_field'] ?? null;
        $acf_type = $acf_field['type'] ?? null;

        if ($acf_type === "oembed") {
          $return['resolve'] = function ($root) use ($acf_field) {
            if (isset($root[$acf_field['key']])) {
              $value = $root[$acf_field['key']];
              $embed = @wp_oembed_get($value);
              if ($embed) {
                return $embed;
              }
            }

            return null;
          };
        }

        return $return;
      },
      10,
      4
    );
  }
endif;
add_action('after_setup_theme', 'react_setup');

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function react_content_width()
{
  $GLOBALS['content_width'] = apply_filters('react_content_width', 640);
}
add_action('after_setup_theme', 'react_content_width', 0);

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function react_widgets_init()
{
  register_sidebar(array(
    'name'          => esc_html__('Sidebar', 'react'),
    'id'            => 'sidebar-1',
    'description'   => esc_html__('Add widgets here.', 'react'),
    'before_widget' => '<section id="%1$s" class="widget %2$s">',
    'after_widget'  => '</section>',
    'before_title'  => '<h2 class="widget-title">',
    'after_title'   => '</h2>',
  ));
}
add_action('widgets_init', 'react_widgets_init');

// wp_enqueue_style('style', get_stylesheet_uri());

/**
 * Load Jetpack compatibility file.
 */
if (defined('JETPACK__VERSION')) {
  require get_template_directory() . '/inc/jetpack.php';
}

// Removes the comment from the admin menu
add_action('admin_init', 'my_remove_admin_menus');
function my_remove_admin_menus()
{
  remove_menu_page('edit-comments.php');
}
