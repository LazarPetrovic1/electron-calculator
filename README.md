# electron.js calculator application

This application was build with [electron.js](https://electronjs.org/).
It's quite primitive, but it supports key presses.
It's my second electron application.

## Mapped events

Due to brevity of code and ease of use, many keys have been mapped to the document itself.
Below is a table denoting all of it.

|  Keycode  |         Key         |         Added output         |
| :-------: | :-----------------: | :--------------------------: |
| 48 or 96  |         "0"         |             "0"              |
| 49 or 97  |         "1"         |             "1"              |
| 50 or 98  |         "2"         |             "2"              |
| 51 or 99  |         "3"         |             "3"              |
| 52 or 100 |         "4"         |             "4"              |
| 53 or 101 |         "5"         |             "5"              |
| 54 or 102 |         "6"         |             "6"              |
| 55 or 103 |         "7"         |             "7"              |
| 56 or 104 |         "8"         |             "8"              |
| 57 or 105 |         "9"         |             "9"              |
|    107    |         "+"         |             "+"              |
|    109    |         "-"         |             "-"              |
|    106    |         "\"         |             "\"              |
|    111    |         "/"         |             "/"              |
|    77     |         "%"         |             "%"              |
|    219    |         "["         |             "("              |
|    221    |         "]"         |             ")"              |
|    113    |        "F2"         |        `Quick square`        |
|    114    |        "F3"         |         `Quick cube`         |
|    67     |         "C"         |     `Deletes everything`     |
|     8     |     `Backspace`     | `Deletes a single character` |
|    13     | `Enter` or `Return` |  `Evaluates an expression`   |
