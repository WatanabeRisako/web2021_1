# web2021_1

2021年度の授業用リポジトリ

## ファイル一覧

ファイル名/ディレクトリ名 | 役割
-|-
app.js | expressによるHello world
app2.js | テンプレートファイルshow.ejsを使用したHello World
app3.js | app2.jsにpublicディレクトリの処理を加えたもの
app4.js | app3.jsにファイルが見つからなかった場合の処理を加えたもの
app5.js | データベースから都道府県，人口を取得して返す
index.js | 都道府県，人口の表示数をページから取得する
public | 静的なページデータ
views | テンプレートファイル
create.js | テーブルを登録するサンプル
delete.js | テーブルからデータを削除するサンプル
insert.js | テーブルにデータを追加するサンプル
schema.js | テーブル情報を表示するサンプル
select.js | テーブルからデータを取得するサンプル
tables.js | テーブル名を表示するサンプル
test.db | app5.jsやapp6.jsで使用するデータベース

data table
id | data_name
1  | 謎解き
2  | 一身
3  | 戦いの教え
4  | 祝福

map table
id | map_name
1  | 陸
2  | 空

map2 table
id | map2_name
1  | 中央ハイラル
2  | へブラ地方
3  | オルディン地方
4  | アッカレ地方
5  | ハテール地方
6  | ラネール地方
7  | ゲルド地方
8  | フィローネ地方

treasure table
id | treasure_name
1  | 装備
2  | 武器
3  | 宝石
4  | ゾナウ関係
5  | 薬
6  | 素材