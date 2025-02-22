import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.ujjainlive.Ujjainlive',
  appName: 'Ujjainlive',
<<<<<<< HEAD
  webDir: 'www/browser',
=======
  webDir: 'www',
>>>>>>> 0c5b296ce3c583aa7761df121029b24325a0254f
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: true,
      launchFadeOutDuration: 3000,
      backgroundColor: "#ffffffff",
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_CROP",
      showSpinner: true,
<<<<<<< HEAD
      spinnerColor: "#999999",
      androidSpinnerStyle: "large",
      iosSpinnerStyle: "small",
      androidSpinnerStyle: "large",
      iosSpinnerStyle: "small",
      spinnerColor: "#999999",
      splashFullScreen: true,
      splashImmersive: true,
      layoutName: "launch_screen",
      useDialog: true,
    },
  },
};

export default config;
