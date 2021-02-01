# SampleMulter
ファイルアップロードクライアントのテストの為、受け側を Express, Multer にて作成した。  
- ファイルのバイナリイメージは、'file'という名称とする
- HTTPリクエストの内容は以下の感じ
  + HTTP HEADER
    ```
    Content-Type: multipart/form-data; boundary=123456789012345678901234567890
    ```
  +HTTP BODY
    ```
    -----------------------------123456789012345678901234567890
    Content-Disposition: form-data; name="file"; filename="C:\Users\soumunote\Desktop\readme.pdf"
    Content-Type: application/upload

    (ここにバイナリデータ)

    -----------------------------123456789012345678901234567890--
    ```
以上
