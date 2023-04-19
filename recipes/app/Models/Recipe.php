<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Recipe extends Model
{
    use HasFactory;

    public function ratings(): HasMany {
        return $this->hasMany(Rating::class);
    }

    public function instructions(): HasMany {
        return $this->hasMany(Instruction::class);
    }

    public function favorites(): HasMany {
        return $this->hasMany(Favorite::class);
    }

    public function user(): BelongsTo {
        return $this->belongsTo(User::class);
    }
}
