# Stickman Fighter (APK + EXE)

## GitHub ile derleme
1. GitHub'da yeni bir **boş repo** aç (ör. `stickman-fighter`).
2. Bu klasörün içeriğini repoya yükle (`.github` klasörü dahil, gizli klasör olduğuna dikkat!).
   ```
   git init && git add . && git commit -m "ilk"
   git branch -M main
   git remote add origin https://github.com/KULLANICI/stickman-fighter.git
   git push -u origin main
   ```
3. Repo → **Actions** sekmesi → "Build APK and EXE" çalışır (~5-10 dk).
4. Bitince çalışmanın sayfasındaki **Artifacts** bölümünden `windows-exe` ve `android-apk` dosyalarını indir.
5. Kalıcı indirme linki için etiket at: `git tag v1.0.0 && git push --tags` → **Releases** bölümünde `.exe` ve `.apk` görünür.

## Notlar
- **EXE**: `portable` (kurulumsuz tek dosya) ve `nsis` (kurulumlu) üretilir. F11 = tam ekran.
- **APK**: Debug imzalıdır; telefonda "bilinmeyen kaynaklardan yükle" izniyle kurulur. Play Store için ayrıca imzalı release gerekir.
- **PC tuşları**: Ayarlar → **⌨️ TUŞLAR**'dan değiştirilir, kaydedilir.
- Oyunu güncellemek için `www/index.html` dosyasını değiştirip push et.
