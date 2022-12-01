# Mock Test

Pertanyaan:
1. Apakah kegunaan JSON pada REST API?
    - JSON adalah format yang dipakai untuk menyimpan dan mentransfer data
    - Kegunaan JSON yaitu sebagai format untuk bertukar data client dan server atau antar aplikasi.
    
2. Jelaskan bagaimana REST API bekerja?
    - Dalam RESTful application ada 2 sisi yaitu REST Server dan REST Client.
    - REST server adalah pihak yang menyediakan data sedangkan REST Client adalah pihak yang melakukan request ke REST Server.
    - RESTful API berperan sebagai jembatan antara database dengan client.
    - Cara kerja REST API adalah client akan mengirimkan request ke server melalui RESTful API dan server bisa memberikan responsenya ke client juga melalui RESTful API. Jadi, client bisa berkomunikasi dengan sever hingga mengubah data yang ada di database (server) sesuai dengan ketetuan yang diberikan. Akan tetapi, mereka tidak bisa mengubah sesuatu diluar aturan yang berlaku.

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