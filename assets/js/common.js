function n(){console.log("🧩 Test function module")}console.log("🧩 MODULE LOADED");class s{constructor(){console.log("🧩 1. Test class instantiated")}classMethod(){console.log("🧩 2. Test class method")}}function l(){console.log("🛠️ UTILITY 1")}function t(){console.log("🛠️ UTILITY 2")}function e(){console.log("✅ COMMON JS LOADED"),n(),new s().classMethod(),l(),t()}document.addEventListener("DOMContentLoaded",e);
