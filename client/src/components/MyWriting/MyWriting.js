import styled from "styled-components";

const BigDiv = styled.div`
  background-color: aliceblue;
  margin-top: 20px;
  width: 100vw;
  height: 800px;
`;

const NavDiv = styled.div`
  display: flex;
  width: 800px;
  margin: 0 auto;
`;

const BntDiv = styled.div`
  flex-grow: 1;
`;

const NavButton1 = styled.button`
  background-color: #e6f4fa;
  margin-left: 40px;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 20px;
  padding-bottom: 20px;
  border: none;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.65);
  border-radius: 10px;
`;

const NavButton2 = styled.button`
  background-color: #e6f4fa;
  margin-right: 40px;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 20px;
  padding-bottom: 20px;
  border: none;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.65);
  border-radius: 10px;
`;

const FilterDiv = styled.div`
  display: flex;
  width: 800px;
  margin: 0 auto;
`;

const SelectDiv = styled.div`
  margin: 20px;
`;

const Select = styled.select`
  background-color: #e6f4fa;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  border: none;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.65);
  border-radius: 10px;
`;

const NewDiaryBtn = styled.button`
  background-color: #e6f4fa;
  width: 400px;
  margin-right: 40px;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  border: none;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.65);
  border-radius: 10px;
`;

const FlexDiv = styled.div`
  border-bottom: 1px dashed rgba(0, 0, 0, 0.1);
  display: flex;
  width: 800px;
  margin: 0 auto;
  justify-content: space-between;
`;

const ImgDiv = styled.div`
  float: left;
  margin-right: 20px;
`;

const Dbutton = styled.div`
  background-color: ${(props) => props.bgColor};
  margin-top: 30px;
  margin-right: 40px;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  border: none;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.65);
  border-radius: 10px;
`;
const Mywriting = () => {
  return (
    <BigDiv>
      <NavDiv>
        <BntDiv>
          <NavButton1>:arrow_left:</NavButton1>
        </BntDiv>
        <BntDiv>
          <h1>2022년 1월</h1>
        </BntDiv>
        <BntDiv>
          <NavButton2>:arrow_right:</NavButton2>
        </BntDiv>
      </NavDiv>
      <FilterDiv>
        <SelectDiv>
          <Select>
            <option>최신 순</option>
            <option>오래된 순</option>
          </Select>
        </SelectDiv>
        <SelectDiv>
          <Select>
            <option>전부 다</option>
            <option>좋은 감정</option>
            <option>나쁜 감정</option>
          </Select>
        </SelectDiv>
        <SelectDiv>
          <NewDiaryBtn>새 일기 쓰기</NewDiaryBtn>
        </SelectDiv>
      </FilterDiv>
      <div>
        <FlexDiv>
          <ImgDiv>
            <img src="assets/emotion1.png" />
          </ImgDiv>
          <div>
            <h4>2022.1.23</h4>
            <text>안녕!</text>
          </div>
          <div>
            <Dbutton bgColor="#e6f4fa">수정하기</Dbutton>
            <Dbutton bgColor="rgba(233, 52, 128, 0.12)">삭제하기</Dbutton>
          </div>
        </FlexDiv>
        <FlexDiv>
          <ImgDiv>
            <img src="assets/emotion2.png" />
          </ImgDiv>
          <div>
            <h4>2022.1.24</h4>
            <text>hi!</text>
          </div>
          <div>
            <Dbutton bgColor="#e6f4fa">수정하기</Dbutton>
            <Dbutton bgColor="rgba(233, 52, 128, 0.12)">삭제하기</Dbutton>
          </div>
        </FlexDiv>
        <FlexDiv>
          <ImgDiv>
            <img src="assets/emotion3.png" />
          </ImgDiv>
          <div>
            <h4>2022.1.25</h4>
            <text>Hmmmmmm!</text>
          </div>
          <div>
            <Dbutton bgColor="#e6f4fa">수정하기</Dbutton>
            <Dbutton bgColor="rgba(233, 52, 128, 0.12)">삭제하기</Dbutton>
          </div>
        </FlexDiv>
      </div>
    </BigDiv>
  );
};

export default Mywriting;
