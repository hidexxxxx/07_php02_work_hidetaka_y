//form内に画像を選択しアップロード


function uploadImage() {
    let input = document.getElementById("upload-photo-input");
    const file = input.files[0];
    const reader = new FileReader();

    //eはイベントオブジェクトでイベントが発生した時に自動的に生成されるオブジェクト
    reader.onload = function (e) {
        //新しいImageオブジェクトを作成。Imageオブジェクトで画像を表示させる
        const img = new Image();
        //読み込んだ画像ファイルのデータを Image オブジェクトのsrcプロパティに設定
        img.src = e.target.result;
        // 20vh = 20% of viewport height
        img.width = window.innerHeight * 0.2;

        const resultDiv = document.getElementById("result");
        resultDiv.innerHTML = "";
        //指定された要素に新しい子要素を追加する。子要素化してグルーピングできる
        resultDiv.appendChild(img);


        // アップロードが完了したときの処理
        console.log('Upload complete');
        alert('Upload complete!!');
    };
};


// function uploadImage() {

//     // 画像の保存処理。保存先のフォルダパス
//     const folderPath = "saveHolder";
//     // 元々の画像ファイルの名前を使用
//     const imageName = file.name;

//     const xhr = new XMLHttpRequest();
//     xhr.open("POST", "/saveImage"); // サーバーサイドの保存処理を受けるエンドポイントを指定
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             console.log('画像を保存しました。');
//             alert('画像を保存しました！');
//         }
//     };

//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("folderPath", folderPath);
//     formData.append("imageName", imageName);
//     xhr.send(formData);
//     reader.readAsDataURL(file);
// };