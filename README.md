# Mock Test

Pertanyaan:
1. Apakah kegunaan JSON pada REST API?
    - JSON adalah format yang dipakai untuk menyimpan dan mentransfer data
    - JSON sebagai format untuk bertukar data client dan server atau antar aplikasi. Contoh: RESTful API
    
2. Jelaskan bagaimana REST API bekerja?
    - Dalam RESTful application akan ada 2 sisi yaitu REST Server dan REST Client.
    - REST server adalah pihak yang menyediakan data sedangkan REST Client adalah pihak yang melakukan request ke REST Server.
    - Cara kerja REST API adalah REST client akan mengakses data/resource ke REST server dimana masing-masing resource atau data tersebut dibedakan oleh sebuah global ID atau URIs (Universal Resource Identifiers).

3. Deskripsi fitur:
    - Dalam mock test kali ini, saya membuat To Do List App, dengan menerapkan 2 model yang memiliki relasi one to many, yang mana 1 user bisa memiliki banyak To Do List.
    - User bisa registrasi terlebih dahulu untuk dapat login ke app.
    - Setelah login user akan mendapatkan akses token yang nantinya harus melakukan Authorization di Header.
    - Dengan Authorization tersebut, selanjutnya user bisa menambahkan, mengedit, dan menghapus to do list.

Daftar API

1. User
    - /register
    - /login
    - /authorization (restrict)
    - /showUser (restrict)

2. ToDos
    - /addTask (restrict)
    - /showTasks (restrict)
    - /showTasks/byUser/:id (restrict)
    - /update/:id (restrict)
    - /deleteById/:id (restrict)