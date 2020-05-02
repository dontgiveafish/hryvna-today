<?php

namespace app\services\logging;

class RoleProcessor
{
    public function processRecord(array $record): array
    {
        $isConsole = php_sapi_name() == 'cli';
        $record['role'] = $isConsole ? 'cron' : 'web';

        return $record;
    }
}
