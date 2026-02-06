"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Upload, Trash2 } from "lucide-react";
import {
  uploadVolunteerPhoto,
  deleteVolunteerPhoto,
} from "@/app/admin/actions";
import type { VolunteerPhoto } from "@/lib/volunteers";

export default function PhotoGallery({
  photos,
}: {
  photos: VolunteerPhoto[];
}) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [deleting, setDeleting] = useState<string | null>(null);
  const [confirm, setConfirm] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setError(null);
    try {
      const formData = new FormData();
      formData.set("foto", file);
      await uploadVolunteerPhoto(formData);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al subir foto");
    } finally {
      setUploading(false);
      if (fileRef.current) fileRef.current.value = "";
    }
  };

  const handleDelete = async (name: string) => {
    setDeleting(name);
    setError(null);
    try {
      await deleteVolunteerPhoto(name);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al eliminar foto");
    } finally {
      setDeleting(null);
      setConfirm(null);
    }
  };

  return (
    <div className="mt-6">
      {error && (
        <p className="mb-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
          {error}
        </p>
      )}

      <div>
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          onChange={handleUpload}
          className="hidden"
        />
        <button
          onClick={() => fileRef.current?.click()}
          disabled={uploading}
          className="inline-flex items-center gap-2 rounded-lg bg-(--color-secondary-500) px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-(--color-secondary-600) disabled:opacity-50"
        >
          <Upload size={16} />
          {uploading ? "Subiendo..." : "Subir foto"}
        </button>
      </div>

      {photos.length === 0 ? (
        <p className="mt-8 text-center text-(--color-text-secondary)">
          No hay fotos de voluntarios.
        </p>
      ) : (
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {photos.map((photo) => (
            <div
              key={photo.name}
              className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white"
            >
              <div className="relative aspect-square">
                <Image
                  src={photo.url}
                  alt={photo.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                {confirm === photo.name ? (
                  <div className="mb-3 flex gap-2">
                    <button
                      onClick={() => handleDelete(photo.name)}
                      disabled={deleting === photo.name}
                      className="rounded-lg bg-red-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-red-700 disabled:opacity-50"
                    >
                      {deleting === photo.name ? "..." : "Confirmar"}
                    </button>
                    <button
                      onClick={() => setConfirm(null)}
                      className="rounded-lg bg-white px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-100"
                    >
                      Cancelar
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setConfirm(photo.name)}
                    className="mb-3 rounded-lg bg-white/90 p-2 text-red-600 transition-colors hover:bg-white"
                  >
                    <Trash2 size={16} />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
