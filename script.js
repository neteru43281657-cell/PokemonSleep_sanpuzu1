// --- 1. ポケモンデータの定義 (35匹) ---
const pokemonData = [
    { name: "フシギバナ", file: "3.webp", assistTime: 2800, ingredientRate: 26.60, ingredientsText: "ミツ トマト ポテト" },
    { name: "リザードン", file: "6.webp", assistTime: 2400, ingredientRate: 22.40, ingredientsText: "ミート ジンジャー ハーブ" },
    { name: "カメックス", file: "9.webp", assistTime: 2800, ingredientRate: 27.50, ingredientsText: "ミルク カカオ ミート" },
    { name: "ダグトリオ", file: "51.webp", assistTime: 2650, ingredientRate: 19.00, ingredientsText: "トマト ねぎ マメ" },
    { name: "ウツボット", file: "71.webp", assistTime: 2800, ingredientRate: 23.30, ingredientsText: "トマト ポテト ねぎ" },
    { name: "ゴローニャ", file: "76.webp", assistTime: 3100, ingredientRate: 28.00, ingredientsText: "マメ ポテト きのこ" },
    { name: "カモネギ", file: "83.webp", assistTime: 3000, ingredientRate: 16.00, ingredientsText: "ねぎ ミート ジンジャー" },
    { name: "ゲンガー", file: "94.webp", assistTime: 2200, ingredientRate: 16.10, ingredientsText: "ハーブ きのこ オイル" },
    { name: "ラッキー", file: "113-1.png", assistTime: 2900, ingredientRate: 23.60, ingredientsText: "たまご ポテト ミツ" },
    { name: "ガルーラ", file: "115.webp", assistTime: 2650, ingredientRate: 22.20, ingredientsText: "ジンジャー ポテト マメ" },
    { name: "バリヤード", file: "122.webp", assistTime: 2800, ingredientRate: 21.60, ingredientsText: "トマト ポテト ねぎ" },
    { name: "カイロス", file: "127.webp", assistTime: 2400, ingredientRate: 21.60, ingredientsText: "ミツ りんご ミート" },
    { name: "メタモン", file: "132.webp", assistTime: 3500, ingredientRate: 20.10, ingredientsText: "オイル ねぎ しっぽ" },
    { name: "カイリュー", file: "149.webp", assistTime: 2600, ingredientRate: 26.40, ingredientsText: "ハーブ コーン オイル" },
    { name: "ヌオー", file: "195.webp", assistTime: 3400, ingredientRate: 19.00, ingredientsText: "きのこ ポテト ミート" },
    { name: "デリバード", file: "225.webp", assistTime: 2500, ingredientRate: 18.80, ingredientsText: "たまご りんご カカオ" },
    { name: "ハピナス", file: "242.webp", assistTime: 3100, ingredientRate: 23.80, ingredientsText: "たまご ポテト ミツ" },
    { name: "バンギラス", file: "248.webp", assistTime: 2700, ingredientRate: 26.60, ingredientsText: "ジンジャー マメ ミート" },
    { name: "クチート", file: "303.webp", assistTime: 3200, ingredientRate: 20.40, ingredientsText: "オイル コーン トマト" },
    { name: "ボスゴドラ", file: "306.webp", assistTime: 3000, ingredientRate: 28.50, ingredientsText: "ミート コーヒー マメ" },
    { name: "フライゴン", file: "330.webp", assistTime: 2700, ingredientRate: 17.20, ingredientsText: "アボカド ハーブ マメ" },
    { name: "アブソル", file: "359.webp", assistTime: 2950, ingredientRate: 17.80, ingredientsText: "カカオ りんご きのこ" },
    { name: "レントラー", file: "405.webp", assistTime: 2400, ingredientRate: 20.00, ingredientsText: "トマト オイル コーヒー" },
    { name: "ドクロッグ", file: "454.webp", assistTime: 3400, ingredientRate: 22.90, ingredientsText: "オイル ミート" },
    { name: "ユキノオー", file: "460.webp", assistTime: 3000, ingredientRate: 25.00, ingredientsText: "トマト たまご きのこ" },
    { name: "ダークライ", file: "491.webp", assistTime: 2900, ingredientRate: 19.20, ingredientsText: "" }, 
    { name: "パンプジン（中玉）", file: "711.webp", assistTime: 3200, ingredientRate: 13.00, ingredientsText: "カボチャ マメ ポテト" },
    { name: "クワガノン", file: "738.webp", assistTime: 2800, ingredientRate: 19.40, ingredientsText: "コーヒー きのこ ミツ" },
    { name: "キテルグマ", file: "760.webp", assistTime: 2800, ingredientRate: 22.90, ingredientsText: "コーン ミート たまご" },
    { name: "キュワワー", file: "764.webp", assistTime: 2500, ingredientRate: 16.70, ingredientsText: "コーン ジンジャー カカオ" },
    { name: "ウッウ", file: "845.webp", assistTime: 2700, ingredientRate: 16.50, ingredientsText: "オイル ポテト たまご" },
    { name: "マスカーニャ", file: "908.webp", assistTime: 2600, ingredientRate: 19.00, ingredientsText: "ポテト ミルク ジンジャー" },
    { name: "ラウドボーン", file: "911.webp", assistTime: 2700, ingredientRate: 26.80, ingredientsText: "りんご ミート ハーブ" },
    { name: "ウェーニバル", file: "914.webp", assistTime: 2600, ingredientRate: 23.20, ingredientsText: "マメ ねぎ オイル" },
    { name: "ドオー", file: "980.webp", assistTime: 3500, ingredientRate: 20.80, ingredientsText: "カカオ コーヒー ポテト" },
];

// データをPlotlyの形式に変換
const x_data = pokemonData.map(p => p.assistTime);
const y_data = pokemonData.map(p => p.ingredientRate);
const pokemon_names_for_label = pokemonData.map(p => p.name);


// --- 2. グラフの設定と描画 ---
const trace = {
  x: x_data,
  y: y_data,
  mode: 'markers+text', 
  type: 'scatter',
  name: 'ポケモン散布図',
  text: pokemon_names_for_label,
  textposition: 'top center',
  textfont: {
    family: 'Arial, sans-serif',
    size: 10,
    color: '#333'
  },
  marker: {
    size: 15,
    opacity: 0.8,
    color: 'rgb(50, 100, 200)'
  },
  hoverinfo: 'none',
};

const layout = {
  title: '散布図_食材ポケモン',
  xaxis: {
    title: {
        text: 'おてつだい時間 (秒)',
        font: {
            size: 18 
        }
    },
    // ★修正点★: rangeを削除し、rangemode: 'tozero' を復活させる
    rangemode: 'tozero', 
    tickfont: {
        size: 14 
    },
  },
  yaxis: {
    title: {
        text: '食材確率 (%)',
        font: {
            size: 18
        }
    },
    // ★修正点★: rangeを削除し、rangemode: 'tozero' を復活させる
    rangemode: 'tozero',
    tickfont: {
        size: 14
    },
    tickformat: '.1f',
  },
  hovermode: false, 
  responsive: true
};

const plotDiv = document.getElementById('scatter-plot');
Plotly.newPlot(plotDiv, [trace], layout, {
    displayModeBar: true, 
    scrollZoom: true,
    displaylogo: false
});


// --- 3. カスタム詳細情報カードの実装 ---

const detailCard = document.getElementById('detail-card');

/**
 * 詳細情報カードのHTMLを生成する関数
 */
function createDetailCardHtml(p) {
    const pokemonImagePath = `./images/${p.file}`; 
    const ingredients = p.ingredientsText ? p.ingredientsText.split(' ') : [];

    const ingredientImagesHtml = ingredients.map(ing => {
        const ingImagePath = `./images/${ing}.webp`; 
        return `<img src="${ingImagePath}" alt="${ing}" title="${ing}">`;
    }).join('');

    return `
        <h3>${p.name}</h3>
        <img id="pokemon-image" src="${pokemonImagePath}" alt="${p.name}">
        <p><strong>おてつだい時間:</strong> ${p.assistTime} 秒</p>
        <p><strong>食材確率:</strong> ${p.ingredientRate}%</p>
        <p><strong>持ってくる食材:</strong></p>
        <div class="ingredient-images">${ingredientImagesHtml || 'なし'}</div>
    `;
}

// グラフ上の点にカーソルが合わさった時のイベント
plotDiv.on('plotly_hover', function(data) {
    if (data.points && data.points.length > 0 && data.points[0].curveNumber === 0) {
        
        const pointIndex = data.points[0].pointIndex;
        const hoveredPokemon = pokemonData[pointIndex];
        
        const xPos = data.event.clientX;
        const yPos = data.event.clientY;

        detailCard.innerHTML = createDetailCardHtml(hoveredPokemon);
        
        detailCard.style.top = `${yPos + 15}px`; 
        detailCard.style.left = `${xPos + 15}px`; 
        detailCard.style.display = 'block';

    } else {
        hideDetailCard();
    }
});

function hideDetailCard() {
    detailCard.style.display = 'none';
}

plotDiv.on('plotly_unhover', hideDetailCard);
plotDiv.on('plotly_click', hideDetailCard);
