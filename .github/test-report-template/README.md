# テストレポートのカスタムHTMLテンプレート

このディレクトリには、テスト結果を視覚化するためのカスタムHTMLテンプレートを配置できます。

## 使用方法

1. `custom-report-template.html` をベースにカスタマイズ
2. GitHub Actions のワークフローで、このテンプレートを使用してレポートを生成
3. GitHub Pages やアーティファクトとして公開

## テンプレートの構造

- `index.html` - メインのレポートページ
- `assets/` - CSS、JavaScript、画像などのリソース
- `data/` - テスト結果のJSONデータ
