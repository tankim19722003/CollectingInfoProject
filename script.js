
function start() {
    // add first element
    html = `
    <table style="border-spacing: 10px;">
        <tr class="content-field">
            <td>
                <label for="" class ="part-name_label">Part name</label>
            </td>
            
            <td>
                 <input class="part-name_input" value="Chip snapdragon"></input>
            </td>
            
        </tr>

        <tr class="para-list">
            <td>
                 <label for="" class="paragraph_title">Paragraph 1</label>
            </td>  

            <td>
                <input class="para" value="Đoạn văn 1 part 1"></input>
            </td>
        </tr>
    </table>
    `;

    document.querySelector(".post-content-body").innerHTML = html;
}
// start();

let countPart = 2;
function addParagraph(classPara) {
    console.log(classPara);
    let paraList = document.querySelector("." + classPara);
    let html = `
        <div class="para-wrap">
            <label class="paragraph-label label-dis">Paragraph</label>
            <div class="321">
                <textarea class="para" value="Đoạn văn 1 part 1"></textarea>
            </div>
        </div>
    `;
    paraList.innerHTML += html;
    console.log(paraList);
}


function addPart() {
    let partList = document.querySelector(".post-content-body");
    let paraClass = new Date().getTime();
    let html = `
    <div class="part" style="display: flex;flex-direction: column;">
        <h1 style="font-weight: bold;" class="part-title">Part ${countPart}</h1>

        <div class="part-name-wrap">
            <label for="" class="part-name-label label-dis">Part name</label>
            <input class="part-name" value="Chip snapdragon"></input>
        </div>
        
        <div class="para-list para-${paraClass}" style="display: flex;flex-direction: column;">
            <div class="para-wrap">
                <label class="paragraph-label label-dis">Paragraph</label>
                <div>
                    <textarea class="para" value="Đoạn văn 1 part 1"></textarea>
                </div>
            </div>

        </div>
        <div class="btn-wrap" style="text-align: center">
            <div class="btn-add-para" onclick="addParagraph('para-${paraClass}')">+</div>
        </div>
    </div>
    `;
    countPart++;
    partList.innerHTML += html;
}