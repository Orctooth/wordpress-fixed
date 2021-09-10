<?php
/** Enable W3 Total Cache */
define('WP_CACHE', true); // Added by W3 Total Cache

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'harrywel_wordpress_data' );

/** MySQL database username */
define( 'DB_USER', 'harrywel_harrywelchman' );

/** MySQL database password */
define( 'DB_PASSWORD', 'K3~;Wrkrcb3[' );

/** MySQL hostname */
define( 'DB_HOST', '127.0.0.1' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'o+`{=Q=kJ{v[=L?JXZ/3}@Kx[~HcNzlH!tDKq*([(}l3K@f{2h57L^&$1U!(H3,L' );
define( 'SECURE_AUTH_KEY',  '(#Kweg^y&e#3xoB!<^D*M?=N({fdU&]j7]4TtO{tc0sfwoj$^c0nFXia6BM<RdZU' );
define( 'LOGGED_IN_KEY',    'LF,LKI+(r$Am32{@*_O.Y>hzpLl #`tXYEcLgNJoCF3az*>}aW_pVClkPiQ@%rl6' );
define( 'NONCE_KEY',        '}`vqA<59*#9n)2_okoePjCN,#~C7K%_1u9d>>=6rM|F@sg#[RZRM3)3.Z|d)HN->' );
define( 'AUTH_SALT',        'S4[^~ezq(1bY!p.R^U u.`MPTuR+&sWF;._(jzUpT0+!zHe4s+@tWUVa%CAF_5$8' );
define( 'SECURE_AUTH_SALT', 'V P!Gh.xEnIjwT_FcbayA@;D[~zfY}AUlOW;vWi  {`U7<uHY> |IfSU=JZzuN U' );
define( 'LOGGED_IN_SALT',   'KFz{xaX`X#kf s]E0oY4ySx%jgA$J@8&kPm:j|Cr~V@x]OgZgC/Jwhx X|R,^}cN' );
define( 'NONCE_SALT',       '3330H09`lVJxdtHGpv)^w;rfEdA40tQ?0Y!TLF[@`?`vQW#@5r(cT1A#u)7GtkcI' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );
define( 'WP_MEMORY_LIMIT', '256M' );
define( 'WP_HOME', 'http://wordpress.harry-welchman.netmatters-scs.co.uk');
define( 'WP_SITEURL', 'http://wordpress.harry-welchman.netmatters-scs.co.uk');

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
