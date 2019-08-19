<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier contient les réglages de configuration suivants : réglages MySQL,
 * préfixe de table, clés secrètes, langue utilisée, et ABSPATH.
 * Vous pouvez en savoir plus à leur sujet en allant sur
 * {@link http://codex.wordpress.org/fr:Modifier_wp-config.php Modifier
 * wp-config.php}. C’est votre hébergeur qui doit vous donner vos
 * codes MySQL.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en "wp-config.php" et remplir les
 * valeurs.
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define( 'DB_NAME', 'portfolio_db' );

/** Utilisateur de la base de données MySQL. */
define( 'DB_USER', 'root' );

/** Mot de passe de la base de données MySQL. */
define( 'DB_PASSWORD', 'root' );

/** Adresse de l’hébergement MySQL. */
define( 'DB_HOST', 'localhost' );

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Type de collation de la base de données.
  * N’y touchez que si vous savez ce que vous faites.
  */
define('DB_COLLATE', '');

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clefs secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'k{$l$u>)P%7Gk}r.T)GnmSwE|@u!q+uS,-F2W_ &+2L#qtAO$EY X7U:s2[pFeKQ' );
define( 'SECURE_AUTH_KEY',  '-+hHDJLoKW$(L4Z/cqW&W;eZ4;c@5f.fI$-,oUQq[L=ww}#2vGE%!>`=t5@/Kdyl' );
define( 'LOGGED_IN_KEY',    '>)ewn4s<K9fxf(H]>K|JxDu8-AiR#eSX<  {1OG4l)U%)W#Rn~F#R)M%h-tSxrDs' );
define( 'NONCE_KEY',        'q}i xC%8Td|C#?JzX8#au0T(c%5|QAN9XoHEjIP*US2ZKc]ueXRaHeKD9F]WqB-`' );
define( 'AUTH_SALT',        ':_d}w[hIWXJy~&PLqDA*Suil1R7L3qj*@1dg*8I8^;yX9tm@oLE!JD,J/M5O#{0W' );
define( 'SECURE_AUTH_SALT', 'q,D>j[W.7gM9|zp!ZBk2 fh-O8)@NVhME5ADWh#PnWw*4{L-2Z,Ao_~cT}EUI:nN' );
define( 'LOGGED_IN_SALT',   'GJ=hfq>u#8+kn149&5}3s?GiYzI{ 0y;]m5r/A}8`/:oE)>%@#-zzN5 NJZ1CcUb' );
define( 'NONCE_SALT',       'yv,Z]UZRwV?B*Bc;zfSh#{nieWwc36gb(vh,:s5RdY?)8l6pSEWq$f6pVk:m+[|#' );
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix = 'wp_';

/**
 * Pour les développeurs : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortemment recommandé que les développeurs d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur le Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* C’est tout, ne touchez pas à ce qui suit ! Bonne publication. */

/** Chemin absolu vers le dossier de WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once(ABSPATH . 'wp-settings.php');
