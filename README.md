# JokiAkun

npx sequelize-cli model:generate --name Joki --attributes name:string,age:integer,phone:string,address:string,image:string,status:string

npx sequelize-cli model:generate --name Akun --attributes name:string,gameID:string,server:string,phone:string

npx sequelize-cli model:generate --name Jam --attributes sesi:varchar,jam:varchar

npx sequelize-cli model:generate --name Jadwal --attributes JokiId:integer,AkunId:integer,JamId:integer

# API Documentation

| Method | Route                                      | Keterangan                                                                           |
| ------ | -------------------------------------------| ------------------------------------------------------------------------------------ |
| GET    | /                                          | Menampilkan home                                                                     |
| GET    | /joki                                      | Menampilkan semua penjoki yang ada dalam database                                    |
| GET    | /joki/create                               | Menampilkan halaman form untuk menambahkan data joki                                 |
| GET    | /joki/delete/:id                           | Melakukan _delete_ data joki berdasarkan `id` yang dikirimkan                        |
| GET    | /joki/edit/:id                             | Menampilkan halaman form untuk merubah data joki                                     |
| GET    | /joki/detail/:id                           | Menampilkan halaman detail data joki                                                 |
| GET    | /joki/detail/delete/:akunId/:jamId/:jokiId | Melakukan _delete_ data jadwal joki berdasarkan `id` akun,jam, dan joki              |
| GET    | /joki/detail/edit/:akunId/:jamId/:jokiId   | Melakukan _edit_ data jadwal joki berdasarkan `id` akun,jam, dan joki                |
| POST   | /joki/create                               | Menerima data yang dikirim dari halaman `/joki/create` untuk melakukan _insertion_ ke dalam table `Joki`|
| POST   | /joki/edit/:id                             | Melakukan _edit_ data joki berdasarkan `id` yang dikirimkan                          |
| GET    | /akun                                      | Menampilkan semua akun yang ada dalam database                                       |
| GET    | /akun/create                               | Menampilkan halaman form untuk menambahkan data akun                                 |
| GET    | /akun/delete/:id                           | Melakukan _delete_ data akun berdasarkan `id` yang dikirimkan                        |
| GET    | /akun/edit/:id                             | Melakukan _edit_ data akun berdasarkan `id` yang dikirimkan                          |
| POST   | /akun/create                               | Menerima data yang dikirim dari halaman `/akun/create` untuk melakukan _insertion_ ke dalam table `Akun` |
| POST   | /akun/edit/:id                             | Melakukan _edit_ data akun berdasarkan `id` yang dikirimkan                          |
| GET    | /jam                                       | Menampilkan semua jam yang ada dalam database                                        |
| GET    | /jam/create                                | Menampilkan halaman form untuk menambahkan data jam                                  |
| GET    | /jam/delete/:id                            | Melakukan _delete_ data jam berdasarkan `id` yang dikirimkan                         |
| GET    | /jam/edit/:id                              | Melakukan _edit_ data jam berdasarkan `id` yang dikirimkan                           |
| POST   | /jam/create                                | Menerima data yang dikirim dari halaman `/jam/create` untuk melakukan _insertion_ ke dalam table `Jam` |
| POST   | /jam/edit/:id                              | Melakukan _edit_ data jam berdasarkan `id` yang dikirimkan                           |
| GET    | /jadwal                                    | Menampilkan semua jadwal yang ada dalam database                                     |
| GET    | /jadwal/create                             | Menampilkan halaman form untuk menambahkan data jadwal                               |
| POST   | /jadwal/create                             | Menerima data yang dikirim dari halaman `/jadwal/create` untuk melakukan _insertion_ ke dalam table `Jadwal` |
| POST   | /jadwal/edit/:akunId/:jamId/:jokiId        | Melakukan _edit_ data jadwal berdasarkan `id` akun,jam, dan joki                     |