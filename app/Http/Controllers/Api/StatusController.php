<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Status;

class StatusController extends Controller
{
    public function index() {
        $statuses = Status::get();

        return $statuses;
    }
}
