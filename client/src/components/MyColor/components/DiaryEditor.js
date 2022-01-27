import React from "react";
   
function DiaryEditor() {
  return (
    <div className="DiaryEditor">
     
      <div>
        <section>
          <h4>What day is it today?</h4>
          <div className="input_box">
            <input
            
            />
          </div>
        </section>
        <section>
          <h4>Today's mood</h4>
          <div className="input_box icon_list_wrapper">
            {iconList.map((it) => (
              <IconItem
                key={it.icon_id}
                {...it}
               
                isSelected={it.icon_id === icon}
              />
            ))}
          </div>
        </section>
        <section>
          <h4>Today's diary.</h4>
          <div className="input_box text_wrapper">
            <textarea
              placeholder="What happened today?"
              
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
        </section>
        <section>
          <div className="control_box">
            <MyButton text={"CANCEL"} onClick={() => navigate(-1)} />
            <MyButton
              text={"COMPLETE"}
            
              onClick={handleSubmit}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default DiaryEditor;
