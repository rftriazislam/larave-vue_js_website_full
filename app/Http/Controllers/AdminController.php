<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function add_tags(){
        return response()->json([
            'msg'=>'data sucess',
            422 
        ]); 
    }
}
