<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

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

    public function categories(): BelongsToMany {
        return $this->belongsToMany(Category::class);
    }

    public function cookbooks(): BelongsToMany {
        return $this->belongsToMany(Cookbook::class);
    }

    public function ingredients(): BelongsToMany {
        return $this->belongsToMany(Ingredient::class);
    }
}
