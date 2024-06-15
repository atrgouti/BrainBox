<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Set extends Model
{
    use HasFactory;

    public function createdBy(){
        return $this->belongsTo(User::class, "userid");
    }
    protected $fillable = ['set_id', 'word', 'translation', 'example'];

    public function set()
    {
        return $this->belongsTo(Set::class);
    }
}
