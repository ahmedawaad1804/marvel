# marvel cinema app

# SCREENS
# 1-login screen
-using text inputs with simple validation for username to proceed.
-SVG's provided with mirror effect for different layout (rtl-ltr).
-change language button .
-login button.

# 2-home screen
-provided with flatlist with memoized card to prevent re-rendering for immutable data.
-activity indicator for paging loading.
-header conatins:
    1-SVG app logo
    2-welcome text which is pressable to enable logout
    3-touchable for search

# 3-search screen
-same flat list with dynamic views for rendering only searched items
-highlighting searched text only in cards

# 4-character details screen
-using same code implementation as uniform data structure.
-onpress function to show image layout
-sticky header

# 5-state management
-using redux thunk for app state management for list and authontication

# 6-axios
-for create and manage API's requests and implement stateful interceptors.

# 7-UI utilities
-better UI management with pre-defined themes.

# 8-marvel api keys
-didn't use it in .env files and write it hardcoded to ensure app runing without any missed variables

