<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\tags;
class AdminController extends Controller
{
    public function add_tags(Request $request){

$this->validate($request,[
'tagsName'=>'required'
]);


      $tags=new tags();
      $tags->tagsName=$request->tagsName;
      
      if ($tags->save()) {
        return response()->json(['sucsess' => true, 'message' => 'Information save successfully'], 200);
    } else {
        return response()->json(['success' => false, 'message' => 'something error'],400);
    }

    }


public function edit_tags(Request $request){
    // $this->validate($request,[
    //     'tagsName'=>'required',
    //     'id'=>'red'
    //     ]);  

$tags=tags::where('id',$request->id)->first();
$tags->update([
    'tagsName'=>$request->tagsName
]);

}

public function delete_tags(Request $request){
    $tags=tags::where('id',$request->id)->delete();
}

public function get_tags(){
    $tags=tags::all();
    if ($tags) {
        return tags::all();
    } else {
        return response()->json(['success' => false, 'message' => 'something error'],400);
    }
}

}
