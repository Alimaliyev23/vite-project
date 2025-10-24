# 🎵 Musiqi Siyahısı və Admin İdarəetmə Tətbiqi

Bu layihə **React**, **Redux Toolkit (RTK)** və **React Router** ilə qurulmuş modern bir veb tətbiqdir. Əsas məqsəd mahnıların siyahısını göstərmək, sevimli (favorit) mahnıları idarə etmək və administratorlar üçün CRUD (Yarat, Oxu, Yenilə, Sil) əməliyyatlarını həyata keçirməkdir.

Layihə **təmiz kod prinsipləri**, **komponentləşmə** və **mobil uyğunluq (Responsive Design)** nəzərə alınaraq optimallaşdırılmışdır.

## 🚀 Əsas Texnologiyalar

- **Frontend:** React (Vite ilə)
- **State Management:** Redux Toolkit (RTK)
- **Routing:** React Router DOM
- **Styling:** Təmiz və Responsive CSS
- **API:** Mock API (CRUD əməliyyatları üçün istifadə olunur)

## ✨ Xüsusiyyətlər

### İctimai Səhifə (`/`)

1.  **Mahnı Siyahısı:** Bütün mahnıları Mock API-dən çəkir və göstərir.
2.  **Filter və Axtarış:** Mahnı adı və ya ifaçı adına görə axtarış, habelə janra görə filterləmə və ada/ifaçıya görə sıralama.
3.  **Favoritlərə Əlavə Etmə:** İstifadəçi istənilən mahnını sevimli siyahısına (Redux vasitəsilə) əlavə edə bilər.
4.  **Favorit Siyahısı:** Seçilmiş bütün mahnıları göstərir və silmə imkanı verir (Redux-da qalır).

### Admin Paneli (`/admin`)

1.  **Qorunan Yol (Protected Route):** Bu səhifəyə giriş yalnız `LoginPage` vasitəsilə mümkündür.
2.  **Giriş Tətbiqi (Authentication):** Redux istifadə edilərək istifadəçi adı və şifrə ilə yerli yoxlama tətbiq edilib.
    - **Demo İstifadəçi Adı:** `AlimAliyev`
    - **Demo Şifrə:** `Alim1234`
3.  **CRUD Əməliyyatları:**
    - Yeni mahnı əlavə etmək.
    - Mövcud mahnıları cədvəldə redaktə etmək.
    - Mahnıları siyahıdan birdəfəlik silmək.

## 💻 Quraşdırma

Layihəni yerli maşınınızda işə salmaq üçün bu addımları izləyin.

### 1. Repository-i Klonlama

```bash
git clone <Sizin GitHub Repo URL-niz>
cd <layihə qovluğunun adı>
```
