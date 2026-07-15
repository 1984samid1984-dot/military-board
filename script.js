const docs=[
["Конституція України (ст.17,65)","https://zakon.rada.gov.ua/laws/show/254%D0%BA/96-%D0%B2%D1%80","Основні конституційні обов'язки щодо захисту держави."],
["Закон Про оборону України","https://zakon.rada.gov.ua/laws/show/1932-12","Правові засади оборони України."],
["Закон Про військовий обов'язок і військову службу","https://zakon.rada.gov.ua/laws/show/2232-12","Регулює військовий облік і службу."],
["Закон Про мобілізаційну підготовку","https://zakon.rada.gov.ua/laws/show/3543-12","Мобілізаційні обов'язки."],
["КУпАП","https://zakon.rada.gov.ua/laws/show/80731-10","Адміністративна відповідальність."],
["Кримінальний кодекс","https://zakon.rada.gov.ua/laws/show/2341-14","Кримінальна відповідальність."],
["Постанова КМУ №1487","https://zakon.rada.gov.ua/laws/show/1487-2022-%D0%BF","Порядок ведення військового обліку."],
["Правила військового обліку","https://www.cherk-consumer.gov.ua/attachments/article/4429/%D0%9F%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D0%B0%20%D0%92%D1%96%D0%B9%D1%81%D1%8C%D0%BA%D0%BE%D0%B2%D0%B8%D0%B9%20%D0%BE%D0%B1%D0%BB%D1%96%D0%BA.pdf","Окремий документ PDF."],
["Постанова КМУ №559","https://zakon.rada.gov.ua/laws/show/559-2024-%D0%BF","Військово-обліковий документ."],
["Постанова КМУ №560","https://zakon.rada.gov.ua/laws/show/560-2024-%D0%BF","Призов під час мобілізації."]
];
const c=document.getElementById('docs');
function draw(f=''){c.innerHTML='';docs.filter(d=>d[0].toLowerCase().includes(f.toLowerCase())).forEach(d=>{let a=document.createElement('a');a.className='card';a.href=d[1];a.target='_blank';a.innerHTML='<b>📄 '+d[0]+'</b><div class=desc>'+d[2]+'</div>';c.appendChild(a);});}
draw();search.oninput=e=>draw(e.target.value);top.onclick=()=>scrollTo({top:0,behavior:'smooth'});