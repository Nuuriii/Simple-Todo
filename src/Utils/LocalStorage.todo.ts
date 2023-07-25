// src/utils/localStorage.ts

//buat fungsi untuk menyimpan nilai ke local storage
//buat 2 buah parameter
export const ToLocalStorage = (key: string, value: any) => {
   //jadikan parameter tersebut agar dapat tersimpan ke local storage
   //gunakan JSON.stringify() untuk memngubah ke tipe data string
   localStorage.setItem(key, JSON.stringify(value));
};

//buat fungsi untuk menggunakan nilai yang telah disimpan di local storage
export const GetFromLocalStorage = (key: string) => {
   //buat variable untuk menyimpan pemanggilan key
   const GetValue = localStorage.getItem(key);
   //kembalikan fungsi dengan menggunakan JSON.parse()
   return GetValue ? JSON.parse(GetValue) : null;
};
