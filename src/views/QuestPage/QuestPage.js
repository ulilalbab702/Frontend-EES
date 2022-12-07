import React, { useEffect, useState } from "react";
import "./QuestPage.css";
import * as Survey from "survey-react"
import "survey-react/survey.css"

const QuestPage = () => {
  const [data, setData] = useState([])
  const [count, setCount] = useState(9)
  const [selected, setSelected] = useState('')
  const [nine, setNine] = useState([])
  const [selectedAns, setSelectedAns] = useState("")
  const [selectValue, setSelectValue] = useState("")

  console.log(selected, 'value terselect')
  useEffect(() => {
    fetch("http://localhost:8069/api/partner/get/?session_code=6621")
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        console.log("QQ", data)
      });
  }, [])

  const sliceData = data?.customers?.slice(-6)
  // const newArr = sliceData.filter(a => {
  //   return a.suggested_answer_ids !== []
  // });
  // console.log("NEWARR", newArr)
  // console.log("SLICEE", sliceData)
  const A = sliceData?.filter(item => item.matrix_row_ids.length > 0)
  // console.log("AAAA", A)


  const handleChange = (e, index) => {
    const data = {
      index: index,
      value: e.target.value
    }
    console.log('OK', [data])
    if (selected === '') {
      console.log('DATA', data)
      setSelected([data])
    } else {
      if (selected.filter((i) => i.index === data.index)) {
        console.log('DEL', selected.filter((i) => i.index !== data.index))
        const item = selected.filter((i) => i.index !== data.index)
        console.log('SAM')
        const newVal = [...item, data]
        setSelected(newVal)
      }
      console.log('ELSE', data)
    }
    console.log('SELECTED', selected)
    //  else if (selected.filter((i) => i.index === data.index )) {
    //    console.log('DEL', selected.filter((i) => i.index !== data.index))
    //    const item = selected.filter((i) => i.index !== data.index )
    //   console.log('SAM')
    //   const newVal = [...item, data]
    //   setSelected(newVal)
    // } else {
    //   console.log('DIF')
    //   setSelected([...selected, data])
    //  }
  }

  // const output = [, {idAnswer: 10001, ,listAnswer: ,item.suggested_answer_ids}, {idAnswer: 10002}, {idAnser: 10003}]


  const _renderQuest = () => {
    if (data !== [] && data?.customers) {
      const item = data?.customers[count]
      const { suggested_answer_ids, matrix_row_ids } = item
      // const quest = suggested_answer_ids?.value
      console.log("cekANS", Object.values(suggested_answer_ids));
      return (
        <div>
          <div>Pertinyinyi</div>
          {matrix_row_ids ? matrix_row_ids.map((y, index) => (
            <div key={index} style={{ textAlign: 'start', paddingBottom: '20px' }}>
              <p key={index}>{index + 1}. {y.value}</p>
              {suggested_answer_ids ? suggested_answer_ids.map((x, idx) => (
                <div key={idx} style={{ display: 'flex', paddingLeft: '20px', gap: '10px' }}>
                  <input key={idx} type="radio" value={x.value} onChange={e => setSelected(e.target.value)} checked={selected === x.value} style={{ backgroundColor: "blue" }} />
                  <p>{x.value}</p>
                </div>
              )) : 'kosong nih'}
            </div>
          )) : 'kosong'}
        </div>
      )
    }
  }

  const json = {
    pages: [
      {
        questions: [
          {
            type: "matrix", name: "Quality", title: "Please indicate if you agree or disagree with the following statements",
            columns: [{ value: 1, text: "Strongly Disagree" },
            { value: 2, text: "Disagree" },
            { value: 3, text: "Neutral" },
            { value: 4, text: "Agree" },
            { value: 5, text: "Strongly Agree" }],
            rows: [{ value: "affordable", text: "Product is affordable" },
            { value: "does what it claims", text: "Product does what it claims" },
            { value: "better then others", text: "Product is better than other products on the market" },
            { value: "easy to use", text: "Product is easy to use" }]
          },
          {
            type: "rating", name: "satisfaction", title: "How satisfied are you with the Product?", isRequired: true,
            mininumRateDescription: "Not Satisfied", maximumRateDescription: "Completely satisfied"
          },
          {
            type: "rating", name: "recommend friends", visibleIf: "{satisfaction} > 3",
            title: "How likely are you to recommend the Product to a friend or co-worker?",
            mininumRateDescription: "Will not recommend", maximumRateDescription: "I will recommend"
          },
          { type: "comment", name: "suggestions", title: "What would make you more satisfied with the Product?", }
        ]
      },
      {
        questions: [
          {
            type: "radiogroup", name: "price to competitors",
            title: "Compared to our competitors, do you feel the Product is",
            choices: ["Less expensive", "Priced about the same", "More expensive", "Not sure"]
          },
          {
            type: "radiogroup", name: "price", title: "Do you feel our current price is merited by our product?",
            choices: ["correct|Yes, the price is about right",
              "low|No, the price is too low for your product",
              "high|No, the price is too high for your product"]
          },
          {
            type: "multipletext", name: "pricelimit", title: "What is the... ",
            items: [{ name: "mostamount", title: "Most amount you would every pay for a product like ours" },
            { name: "leastamount", title: "The least amount you would feel comfortable paying" }]
          }
        ]
      },
      {
        questions: [
          {
            type: "text", name: "email",
            title: "Thank you for taking our survey. Your survey is almost complete, please enter your email address in the box below if you wish to participate in our drawing, then press the 'Submit' button."
          }
        ]
      }
    ]
  };
  // const item = data?customers[count]

  // const _renderAns = () => {
  //   if (data !== [] && data?.customers) {
  //     const item = data?.customers[9]
  //     const survey = new Survey.Model(item)
  //     return (
  //       <div>
  //         <Survey.Survey model={survey} />
  //       </div>
  //     )
  //   }
  // }
  React.useEffect(() => {
    if (data !== [] && data?.customers) {
      const item = data?.customers[count]
      // console.log("ITEMMM", item)
      setNine(item)
    }
  })
  // console.log("SEMBILAN", nine)

  const survey = new Survey.Model(nine)
  return (
    <div className="questionpage" >
      <div className="questionCard" style={{ padding: '20px' }}>
        <div>
          {_renderQuest()}
          {/* <Survey.Survey model={survey} /> */}
          <button onClick={() => setCount(count - 1)} className="btn">Back</button>
          <button onClick={() => setCount(count + 1)} className="btn">Next</button>
        </div>
      </div>
    </div >
  );
};

export default QuestPage;
