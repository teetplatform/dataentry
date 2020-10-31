createNewFile = (_this) => {
    const fileName = _this.parentElement.parentElement.children[1].value;
    if (fileName) {
        if (!localStorage.getItem(fileName)) {
            localStorage.setItem(fileName, "{}");
        }
        setButtonSection(getLocalStorage(fileName), fileName);
    }
}

downloadFile = () => {
    const fileName = document.getElementById('currentFileName').value;
    if (fileName) {
        var myString = localStorage.getItem(fileName);
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(myString));
        element.setAttribute('download', fileName + '.json');
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }
}

getLocalStorage = (fileName) => {
    return JSON.parse(localStorage.getItem(fileName));
}

setButtonSection = (fileObj, fileName) => {
    const btnGrid = document.getElementById('btn-grid');
    btnGrid.innerHTML = '';
    let lastBtn = null;
    Object.keys(fileObj).forEach(qId => {
        const btn = document.createElement('button');
        btn.classList.add('btn', 'btn-info', 'm-1');
        btn.innerText = Number(qId.substring(7));
        btn.onclick = loadQuestionInUI(qId, fileObj[qId]);
        btn.id = qId;
        btnGrid.appendChild(btn);
        lastBtn = btn;
    });
    document.getElementById('addnewbtn').onclick = createNewQuestion(fileObj, fileName);
    lastBtn && lastBtn.click();
}

loadQuestionInUI = (qId, qObj) => {
    return function (event) {
        setQIDInSaveBtn(qId);
        clearInputs();
        resetCard();
        loadQuestionInFormAndBlur(qObj);
        highlightActiveBtn(event.target);
    }
}

setQIDInSaveBtn = (qId) => {
    document.getElementById('save-in-local-storage-btn').setAttribute('data-qid', qId);
}

getNextQID = (fileObj, fileName) => {
    return fileName + (("000" + (Object.keys(fileObj).length + 1)).slice(-4));
}

removeHighlightStyle = () => {
    const highlightbtn = document.getElementsByClassName('highlight-btn')[0];
    highlightbtn && highlightbtn.classList.remove('highlight-btn');
}

highlightActiveBtn = (btn) => {
    removeHighlightStyle();
    btn.classList.add('highlight-btn');
}

loadQuestionInFormAndBlur = (qObj) => {
    const statement = document.getElementById('idstatement');
    const statementTable = document.getElementById('idstatementtbl');
    const statementImg = document.getElementById('idstatementimg');

    const question = document.getElementById('idquestion');
    const questionTable = document.getElementById('idquestiontbl');
    const questionImg = document.getElementById('idquestionimg');

    const optionA = document.getElementById('idopta');
    const optionATable = document.getElementById('idoptatbl');
    const optionAImg = document.getElementById('idoptaimg');

    const optionB = document.getElementById('idoptb');
    const optionBTable = document.getElementById('idoptbtbl');
    const optionBImg = document.getElementById('idoptbimg');

    const optionC = document.getElementById('idoptc');
    const optionCTable = document.getElementById('idoptctbl');
    const optionCImg = document.getElementById('idoptcimg');

    const optionD = document.getElementById('idoptd');
    const optionDTable = document.getElementById('idoptdtbl');
    const optionDImg = document.getElementById('idoptdimg');

    const optionE = document.getElementById('idopte');
    const optionETable = document.getElementById('idoptetbl');
    const optionEImg = document.getElementById('idopteimg');

    const hint = document.getElementById('idhint');
    const hintTable = document.getElementById('idhinttbl');
    const hintImg = document.getElementById('idhintimg');

    if (qObj['S']) {
        statement.parentElement.classList.remove('d-none');
        statement.value = qObj['S'];
        reflectInCard(statement);
    }
    if (qObj['ST']) {
        statementTable.parentElement.classList.remove('d-none');
        statementTable.value = qObj['ST'];
        reflectInCard(statementTable);
    }
    if (qObj['SI']) {
        statementImg.parentElement.classList.remove('d-none');
        statementImg.value = qObj['SI'];
        reflectInCard(statementImg);
    }
    if (qObj['Q']) {
        question.value = qObj['Q'];
        reflectInCard(question);
    }
    if (qObj['QT']) {
        questionTable.parentElement.classList.remove('d-none');
        questionTable.value = qObj['QT'];
        reflectInCard(questionTable);
    }
    if (qObj['QI']) {
        questionImg.parentElement.classList.remove('d-none');
        questionImg.value = qObj['QI'];
        reflectInCard(questionImg);
    }
    if (qObj['A']) {
        optionA.value = qObj['A'];
        reflectInCard(optionA);
    }
    if (qObj['AT']) {
        optionATable.parentElement.classList.remove('d-none');
        optionATable.value = qObj['AT'];
        reflectInCard(optionATable);
    }
    if (qObj['AI']) {
        optionAImg.parentElement.classList.remove('d-none');
        optionAImg.value = qObj['AI'];
        reflectInCard(optionAImg);
    }
    if (qObj['B']) {
        optionB.value = qObj['B'];
        reflectInCard(optionB);
    }
    if (qObj['BT']) {
        optionBTable.parentElement.classList.remove('d-none');
        optionBTable.value = qObj['BT'];
        reflectInCard(optionBTable);
    }
    if (qObj['BI']) {
        optionBImg.parentElement.classList.remove('d-none');
        optionBImg.value = qObj['BI'];
        reflectInCard(optionBImg);
    }
    if (qObj['C']) {
        optionC.value = qObj['C'];
        reflectInCard(optionC);
    }
    if (qObj['CT']) {
        optionCTable.parentElement.classList.remove('d-none');
        optionCTable.value = qObj['CT'];
        reflectInCard(optionCTable);
    }
    if (qObj['CI']) {
        optionCImg.parentElement.classList.remove('d-none');
        optionCImg.value = qObj['CI'];
        reflectInCard(optionCImg);
    }
    if (qObj['D']) {
        optionD.value = qObj['D'];
        reflectInCard(optionD);
    }
    if (qObj['DT']) {
        optionDTable.parentElement.classList.remove('d-none');
        optionDTable.value = qObj['DT'];
        reflectInCard(optionDTable);
    }
    if (qObj['DI']) {
        optionDImg.parentElement.classList.remove('d-none');
        optionDImg.value = qObj['DI'];
        reflectInCard(optionDImg);
    }
    if (qObj['E']) {
        optionE.value = qObj['E'];
        reflectInCard(optionE);
    }
    if (qObj['ET']) {
        optionETable.parentElement.classList.remove('d-none');
        optionETable.value = qObj['ET'];
        reflectInCard(optionETable);
    }
    if (qObj['EI']) {
        optionEImg.parentElement.classList.remove('d-none');
        optionEImg.value = qObj['EI'];
        reflectInCard(optionEImg);
    }
    if (qObj['R']) {
        switch (qObj['R']) {
            case 'A': document.getElementById('correctoptionA').checked = true; break;
            case 'B': document.getElementById('correctoptionB').checked = true; break;
            case 'C': document.getElementById('correctoptionC').checked = true; break;
            case 'D': document.getElementById('correctoptionD').checked = true; break;
            case 'E': document.getElementById('correctoptionE').checked = true; break;
        }
    }
    if (qObj['H']) {
        hint.value = qObj['H'];
        reflectInCard(hint);
    }
    if (qObj['HT']) {
        hintTable.parentElement.classList.remove('d-none');
        hintTable.value = qObj['HT'];
        reflectInCard(hintTable);
    }
    if (qObj['HI']) {
        hintImg.parentElement.classList.remove('d-none');
        hintImg.value = qObj['HI'];
        reflectInCard(hintImg);
    }
}

createNewQuestion = (fileObj, fileName) => {
    return function () {
        setQIDInSaveBtn(getNextQID(fileObj, fileName));
        clearInputs();
        resetCard();
        removeHighlightStyle();
        document.getElementById('idquestion').focus();
    }
}

reflectInCard = (_this) => {
    const val = _this.value;
    if (val) {
        _this.classList.add('d-none');
        const ele = _this.parentElement.children[1];
        ele.classList.remove('d-none');
        if (ele.tagName === 'TABLE') {
            getTable(ele, val);
        } else {
            if (ele.classList.contains('has-span')) {
                ele.children[1].innerHTML = val;
            } else {
                ele.innerHTML = val;
            }
        }
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, document.getElementById('idcard')]);
    }
}

activeEditmode = (_this) => {
    _this.classList.add('d-none');
    const input = _this.parentElement.children[0];
    input.classList.remove('d-none');
    input.focus();
}

toggleContainer = (id) => {
    const ele = document.getElementById(id);
    if (!ele.children[0].value) {
        ele.classList.toggle('d-none');
    }
}

saveQuestionInLocalStorage = (_this) => {
    const statement = document.getElementById('idstatement').value;
    const statementTable = document.getElementById('idstatementtbl').value;
    const statementImg = document.getElementById('idstatementimg').value;
    const question = document.getElementById('idquestion').value;
    const questionTable = document.getElementById('idquestiontbl').value;
    const questionImg = document.getElementById('idquestionimg').value;
    const optionA = document.getElementById('idopta').value;
    const optionATable = document.getElementById('idoptatbl').value;
    const optionAImg = document.getElementById('idoptaimg').value;
    const optionB = document.getElementById('idoptb').value;
    const optionBTable = document.getElementById('idoptbtbl').value;
    const optionBImg = document.getElementById('idoptbimg').value;
    const optionC = document.getElementById('idoptc').value;
    const optionCTable = document.getElementById('idoptctbl').value;
    const optionCImg = document.getElementById('idoptcimg').value;
    const optionD = document.getElementById('idoptd').value;
    const optionDTable = document.getElementById('idoptdtbl').value;
    const optionDImg = document.getElementById('idoptdimg').value;
    const optionE = document.getElementById('idopte').value;
    const optionETable = document.getElementById('idoptetbl').value;
    const optionEImg = document.getElementById('idopteimg').value;
    let rightAns = document.querySelector('input[name="correctoption"]:checked');
    if (rightAns) {
        rightAns = rightAns.value;
    }
    const hint = document.getElementById('idhint').value;
    const hintTable = document.getElementById('idhinttbl').value;
    const hintImg = document.getElementById('idhintimg').value;

    const qObj = {};
    if (statement) {
        qObj['S'] = statement.trim();
    }
    if (statementTable) {
        qObj['ST'] = statementTable.trim();
    }
    if (statementImg) {
        qObj['SI'] = statementImg.trim();
    }
    if (question) {
        qObj['Q'] = question.trim();
    }
    if (questionTable) {
        qObj['QT'] = questionTable.trim();
    }
    if (questionImg) {
        qObj['QI'] = questionImg.trim();
    }
    if (optionA) {
        qObj['A'] = optionA.trim();
    }
    if (optionATable) {
        qObj['AT'] = optionATable.trim();
    }
    if (optionAImg) {
        qObj['AI'] = optionAImg.trim();
    }
    if (optionB) {
        qObj['B'] = optionB.trim();
    }
    if (optionBTable) {
        qObj['BT'] = optionBTable.trim();
    }
    if (optionBImg) {
        qObj['BI'] = optionBImg.trim();
    }
    if (optionC) {
        qObj['C'] = optionC.trim();
    }
    if (optionCTable) {
        qObj['CT'] = optionCTable.trim();
    }
    if (optionCImg) {
        qObj['CI'] = optionCImg.trim();
    }
    if (optionD) {
        qObj['D'] = optionD.trim();
    }
    if (optionDTable) {
        qObj['DT'] = optionDTable.trim();
    }
    if (optionDImg) {
        qObj['DI'] = optionDImg.trim();
    }
    if (optionE) {
        qObj['E'] = optionE.trim();
    }
    if (optionETable) {
        qObj['ET'] = optionETable.trim();
    }
    if (optionEImg) {
        qObj['EI'] = optionEImg.trim();
    }
    if (rightAns) {
        qObj['R'] = rightAns;
    }
    if (hint) {
        qObj['H'] = hint.trim();
    }
    if (hintTable) {
        qObj['HT'] = hintTable.trim();
    }
    if (hintImg) {
        qObj['HI'] = hintImg.trim();
    }
    const qId = _this.getAttribute('data-qid');
    if (qId) {
        const fileName = qId.substring(0, 7);
        const fileObj = JSON.parse(localStorage.getItem(fileName));
        fileObj[qId] = qObj;
        localStorage.setItem(fileName, JSON.stringify(fileObj));
        setButtonSection(getLocalStorage(fileName), fileName);
    }
}

clearInputs = () => {
    const eleIdArray = [
        'idstatement', 'idstatementtbl', 'idstatementimg',
        'idquestion', 'idquestiontbl', 'idquestionimg',
        'idopta', 'idoptatbl', 'idoptaimg',
        'idoptb', 'idoptbtbl', 'idoptbimg',
        'idoptc', 'idoptctbl', 'idoptcimg',
        'idoptd', 'idoptdtbl', 'idoptdimg',
        'idopte', 'idoptetbl', 'idopteimg',
        'idhint', 'idhinttbl', 'idhintimg'
    ];

    eleIdArray.forEach(eleId => {
        const ele = document.getElementById(eleId);
        ele.value = '';
        ele.classList.remove('d-none');
    });

    const checkedInput = document.querySelector('input[name="correctoption"]:checked');
    if (checkedInput) {
        document.querySelector('input[name="correctoption"]:checked').checked = false;
    }
}

resetCard = () => {
    const eleIdArray = [
        'S-in-card', 'ST-in-card', 'SI-in-card',
        'Q-in-card', 'QT-in-card', 'QI-in-card',
        'A-in-card', 'AT-in-card', 'AI-in-card',
        'B-in-card', 'BT-in-card', 'BI-in-card',
        'C-in-card', 'CT-in-card', 'CI-in-card',
        'D-in-card', 'DT-in-card', 'DI-in-card',
        'E-in-card', 'ET-in-card', 'EI-in-card',
        'H-in-card', 'HT-in-card', 'HI-in-card',
    ];

    eleIdArray.forEach(eleId => {
        const ele = document.getElementById(eleId);
        ele.classList.add('d-none');
    });

    document.getElementById('SContainer').classList.add('d-none');
    document.getElementById('STContainer').classList.add('d-none');
    document.getElementById('SIContainer').classList.add('d-none');
    
    document.getElementById('QTContainer').classList.add('d-none');
    document.getElementById('QIContainer').classList.add('d-none');

    document.getElementById('ATContainer').classList.add('d-none');
    document.getElementById('AIContainer').classList.add('d-none');

    document.getElementById('BTContainer').classList.add('d-none');
    document.getElementById('BIContainer').classList.add('d-none');
    
    document.getElementById('CTContainer').classList.add('d-none');
    document.getElementById('CIContainer').classList.add('d-none');
    
    document.getElementById('DTContainer').classList.add('d-none');
    document.getElementById('DIContainer').classList.add('d-none');
    
    document.getElementById('ETContainer').classList.add('d-none');
    document.getElementById('EIContainer').classList.add('d-none');
    
    document.getElementById('HTContainer').classList.add('d-none');
    document.getElementById('HIContainer').classList.add('d-none');
}

getTable = (table, tableData) => {
    table.innerHTML = '';
    const cols = tableData.split('&&');
    cols.forEach((col, index) => {
        cols[index] = col.split('&');
    });
    tableData = cols;
    const rowCount = tableData[0].length;
    table.classList.add('table', 'table-bordered', 'table-dark');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    for (var row = 0; row < rowCount; row++) {
        const tr = document.createElement('tr');
        for (var col = 0; col < tableData.length; col++) {
            if (row === 0) {
                const th = document.createElement('th');
                th.innerText = tableData[col][row];
                tr.appendChild(th);
            } else {
                const td = document.createElement('td');
                td.innerText = tableData[col][row];
                tr.appendChild(td);
            }
        }
        if (row === 0) {
            thead.appendChild(tr);
        } else {
            tbody.appendChild(tr);
        }
    }
    table.appendChild(thead);
    table.appendChild(tbody);
}
