<?php

return [
    'class' => '\Mero\Monolog\MonologComponent',
    'channels' => [
        'main' => [
            'handler' => [
                [
                    'type' => 'stream',
                    'path' => sprintf('%s/%s-%s-%s.log', ...[
                        '@app/runtime/logs',
                        YII_ENV,
                        php_sapi_name(),
                        date('Y-m-d'),
                    ]),
                    'level' => 'debug',
                    'formatter' => new \Monolog\Formatter\JsonFormatter(),
                ]
            ],
            'processor' => [
                ['app\services\logging\RoleProcessor', 'processRecord'],
            ],
        ],
    ],
];
