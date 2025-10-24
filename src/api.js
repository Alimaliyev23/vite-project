const BASE_URL = "https://686ff5294656744248010a71.mockapi.io/api/kitablar";

export const getSongs = async () => {
  const response = await fetch(BASE_URL);
  if (!response.ok) throw new Error("Mahnılar yüklənmədi.");
  return response.json();
};

export const createSong = async (newSongData) => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newSongData),
  });
  if (!response.ok) throw new Error("Mahnı əlavə edilmədi.");
  return response.json();
};

export const updateSong = async (id, updatedData) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedData),
  });
  if (!response.ok) throw new Error("Mahnı yenilənmədi.");
  return response.json();
};

export const deleteSong = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Mahnı silinmədi.");
};
