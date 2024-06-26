<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInita3a40ada4c02e3cec4975ad815e94e1c
{
    public static $prefixLengthsPsr4 = array (
        'S' => 
        array (
            'ScssPhp\\ScssPhp\\' => 16,
            'Sabberworm\\CSS\\' => 15,
        ),
        'P' => 
        array (
            'Padaliyajay\\PHPAutoprefixer\\' => 28,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'ScssPhp\\ScssPhp\\' => 
        array (
            0 => __DIR__ . '/..' . '/scssphp/scssphp/src',
        ),
        'Sabberworm\\CSS\\' => 
        array (
            0 => __DIR__ . '/..' . '/sabberworm/php-css-parser/src',
        ),
        'Padaliyajay\\PHPAutoprefixer\\' => 
        array (
            0 => __DIR__ . '/..' . '/padaliyajay/php-autoprefixer/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInita3a40ada4c02e3cec4975ad815e94e1c::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInita3a40ada4c02e3cec4975ad815e94e1c::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInita3a40ada4c02e3cec4975ad815e94e1c::$classMap;

        }, null, ClassLoader::class);
    }
}
