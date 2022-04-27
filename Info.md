

Hosted Forbase App
https://console.cloud.google.com/apis/credentials?project=clone-c1220

Youtube api information
https://developers.google.com/youtube/v3/guides/auth/installed-apps   - put the auth.action.js


Install some packages
npm i axios numeral moment

go to this link
https://developers.google.com/youtube/v3/docs
Left side go to 
Videos-list

GET https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2C%20contentDetails%2C%20statistics&key=[YOUR_API_KEY] HTTP/1.1

Authorization: Bearer [YOUR_ACCESS_TOKEN]
Accept: application/json

create videos.action.js



