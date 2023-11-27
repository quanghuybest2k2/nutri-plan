## Tạo dự án ionic angular

### `ionic start "atm" blank --type=angular`

## Thêm ứng dụng android

### `ionic cap add android`

## Build production version in /www

### `ionic build --prod`

## Sync the native project from the build folder (/www)

### `npx cap sync`

## Create the native project in Android Studio

### `npx cap open android`

## Tạo file apk trong android studio

Build -> Build bundle (APK) -> Build APK

# File apk ở tại => D:\Mobile_Advanced\nutri-plan\android\app\build\outputs\apk\debug\app-debug.apk

## Fix lỗi => `Caused by: org.gradle.api.tasks.StopExecutionException: Your project path contains non-ASCII characters` và `Caused by: org.gradle.api.internal.plugins.PluginApplicationException: Failed to apply plugin 'com.android.internal.application'.`

[xem tại](https://viblo.asia/p/caused-by-orggradleapitasksstopexecutionexception-your-project-path-contains-non-ascii-characters-018J2M004YK)
