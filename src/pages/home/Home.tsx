import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Password from "./password/Password";
import { useNavigate } from "react-router-dom";
import Side from "@/pages/side/Side";
import { ContentContext } from "../../context/ContextProvider";
import styles from "./Home.module.less";
import UserInfo from "@/components/UserInfo";
import { useDispatch, useSelector } from "react-redux";
import translate from "@/i18nProvider/translate";
import {Button} from "antd"
import customStyle from "./customStyle";

export default function Home() {
  const { state, dispatch } = useContext(ContentContext);
  let navigate = useNavigate();
   
  const count = useSelector<any>((state) => {
    console.log("状态机数据", state);
    return state.counts;
  });
  console.log(count);

  const goDescription = () => {
    navigate("/description" + 2190867637637);
  };
  const goPassWord = () => {
    navigate("/home/password");
  };
  const closePassWord = () => {
    navigate(-1);
  };
  const changeToRed = () => {
    dispatch({ type: "changeToRed", color: "red" });
  };
  const changeToBlue = () => {
    dispatch({ type: "changeToOrange", color: "orange" });
  };
  const goSystem = () => {
    navigate("/system");
  };

  return (
    <div>
      <div className={styles.context}>
        <p style={{ color: `${state.colorValue}` }}>
          Context数据:{JSON.stringify(state)}
        </p>
        <h2 style={{color:"red"}}>{translate("您好")}</h2>
        <h2 style={{color:"red"}}>{translate("北京")}</h2>
      </div>
      <div className={styles.homePage}>主页HOMEPAGE</div>
      <h2>{translate("您好")}</h2>
      <h2>{translate("北京")}</h2>
      <div className={styles.buttonArea}>
        <button className={styles.btn} onClick={() => changeToRed()}>
          dispatchContext-changeToRed
        </button>
        <button className={styles.btn} onClick={() => changeToBlue()}>
          dispatchContext-changeToOrange
        </button>
        <button className={styles.btn} onClick={() => goSystem()}>
          进入权限路由
        </button>
        <button className={styles.btn} onClick={() => goDescription()}>
          跳转至详情
        </button>
        <button className={styles.btn} onClick={() => goPassWord()}>
          打开二级路由,显示密码
        </button>
        <button className={styles.btn} onClick={() => closePassWord()}>
          关闭二级路由
        </button>
      </div>
      <Button style={customStyle.btn} disabled={true}  type="primary">ANTD</Button>
      <UserInfo id={1} name={"dingdang"} age={18} adress={"成都"} />
      <Routes>
        <Route path="password" element={<Password />} />
      </Routes>
      <Routes>
        <Route path="Side" element={<Side />} />
      </Routes>
    </div>
  );
}
