const _renderQuest = () => {
    if (data !== [] && data?.customers) {
      const item = data?.customers[count]
      const { suggested_answer_ids, matrix_row_ids } = item
      console.log("cekdata", suggested_answer_ids);
      return (
        <div>
          <div>Pertinyinyi</div>
          {matrix_row_ids ? matrix_row_ids.map((y, index) => (
            <div key={index} style={{ textAlign: 'start', paddingBottom: '20px' }}>
              <p key={index}>{index + 1}. {y.value}</p>
              {suggested_answer_ids ? suggested_answer_ids.map((x, idx) => (
                <div style={{ display: 'flex', paddingLeft: '20px', gap: '10px' }}>
                  <input key={idx} type="radio" value={x.value} onChange={e => handleChange(e, index)} checked={selected === x.value} style={{ backgroundColor: "blue" }} />
                  <p>{x.value}</p>
                </div>
              )) : 'kosong nih'}
            </div>
          )) : 'kosong'}
        </div>
      )
    }
  }


  const cek = () => {
    if (document.getElementById("1").checked) {
      var val = document.getElementById("1").value;
      alert(val);
    } else if (document.getElementById("2").checked) {
      var val = document.getElementById("2").value;
      alert(val);
    } else if (document.getElementById("3").checked) {
      var val = document.getElementById("3").value;
      alert(val);
    } else if (document.getElementById("4").checked){
      var val = document.getElementById("4").value;
      alert(val);
    } else if (document.getElementById("5").checked){
      var val = document.getElementById("5").value;
      alert(val);
    }
  }

  // <div style={{ display: 'flex', paddingLeft: '20px', gap: '10px' }}>
  //               <input type="radio" value={Object.values(suggested_answer_ids[0])} onClick={() => cek()} id="1" />
  //               <p>{Object.values(suggested_answer_ids[0])}</p>
  //             </div>
  //             <div style={{ display: 'flex', paddingLeft: '20px', gap: '10px' }}>
  //               <input type="radio" value={Object.values(suggested_answer_ids[1])} onClick={() => cek()} id="2" />
  //               <p>{Object.values(suggested_answer_ids[1])}</p>
  //             </div>
  //             <div style={{ display: 'flex', paddingLeft: '20px', gap: '10px' }}>
  //               <input type="radio" value={Object.values(suggested_answer_ids[2])} onClick={() => cek()} id="3" />
  //               <p>{Object.values(suggested_answer_ids[2])}</p>
  //             </div>
  //             <div style={{ display: 'flex', paddingLeft: '20px', gap: '10px' }}>
  //               <input type="radio" value={Object.values(suggested_answer_ids[3])} onClick={() => cek()} id="4" />
  //               <p>{Object.values(suggested_answer_ids[3])}</p>
  //             </div>
  //             <div style={{ display: 'flex', paddingLeft: '20px', gap: '10px' }}>
  //               <input type="radio" value={Object.values(suggested_answer_ids[4])} onClick={() => cek()} id="5" />
  //               <p>{Object.values(suggested_answer_ids[4])}</p>
  //             </div>