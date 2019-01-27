<?php

namespace App\Http\Controllers;

use App\Events\NewNicknameEvent;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    public function store(Request $request)
    {
        if (empty($nickname = $request->get('nickname')) === true) {
            return;
        }

        NewNicknameEvent::dispatch($nickname);
    }
}
