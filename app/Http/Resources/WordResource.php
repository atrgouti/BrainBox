<?php

namespace App\Http\Resources;

use Carbon\Carbon;  
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class WordResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'created_at' => (new Carbon($this->created_at))->format('Y-m-d'),
            'updated_at' => (new Carbon($this->updated_at))->format('Y-m-d'),
            'word' => $this->word,
            'translation' => $this->translation,
            'created_by' => $this->created_by,
            'updated_by' => $this->updated_by,
        ];
}
}