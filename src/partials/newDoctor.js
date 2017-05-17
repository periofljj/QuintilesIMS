import React, { Component } from 'react';
import './newDoctor.css';
import DoctorInfo from '../components/doctorInfo/doctorInfo';
import PageTitle from '../components/pageTitle/pageTitle';
import SixQuestions from '../components/sixQuestions/sixQuestions';
import TableQuestion from '../components/tablequestion/tablequestion';
import Button from '../components/button/button';


class NewDoctorSurvey extends Component {
    constructor(props) {
        super(props);
        // this.save = this.save.bind(this);
    }

    render() {
        return (
            <div>
                <PageTitle></PageTitle>
                <DoctorInfo></DoctorInfo>
                <div className="reporter-info">
                    <div className="reporter-title">一、报告人基本信息</div>
                    <div className="reporter-content">
                        <div className="reporter-line">A1.医生姓名 <input type="text" name="医生姓名"/></div>
                        <div className="reporter-line">S1.性别:
                            <label className="normal-label"><input type="radio" name="医生性别" value="男"/> a.男性</label>
                            <label className="normal-label"><input type="radio" name="医生性别" value="女"/> b.女性</label>
                        </div>
                        <div className="reporter-line">S2.年龄:
                            <label className="normal-label"><input type="radio" name="医生年龄" value="<30"/> a. 小于30</label>
                            <label className="normal-label"><input type="radio" name="医生年龄" value="31-40"/> b. 31-40</label>
                            <label className="normal-label"><input type="radio" name="医生年龄" value="41-50"/> c. 41-50</label>
                            <label className="normal-label"><input type="radio" name="医生年龄" value="51-60"/> d. 51-60</label>
                            <label className="normal-label"><input type="radio" name="医生年龄" value=">61"/> e. 大于61</label>
                        </div>
                        <div className="reporter-line">S3.您从事肿瘤治疗的工作年限
                            <label className="normal-label"><input type="radio" name="肿瘤工作年限" value="<5"/> a. 小于5年</label>
                            <label className="normal-label"><input type="radio" name="肿瘤工作年限" value="5-10"/> b. 5-10年</label>
                            <label className="normal-label"><input type="radio" name="肿瘤工作年限" value="11-20"/> c. 11-20年</label>
                            <label className="normal-label"><input type="radio" name="肿瘤工作年限" value=">20"/> d. 大于20年</label>
                        </div>
                        <div className="reporter-line">A2.职称
                            <label className="normal-label"><input type="radio" name="职称" value="主治"/> 1.主治</label>
                            <label className="normal-label"><input type="radio" name="职称" value="副主任"/> 2.副主任</label>
                            <label className="normal-label"><input type="radio" name="职称" value="主任"/> 3.主任</label>
                        </div>
                        <div className="reporter-line">A3.目前所在科室(请详细到病房或者病区)
                            <label className="text-label"><input type="text" name="科室"/></label>
                        </div>
                        <div className="reporter-line">A4. 科室电话
                            <label className="text-label"><input type="text" name="科室电话"/></label>
                        </div>
                        <div className="reporter-line">A5. 手机
                            <label className="text-label"><input type="text" name="手机"/></label>
                        </div>
                        <div className="reporter-line">A6. 您本季度是否出诊
                            <label className="normal-label"><input type="radio" name="本季度出诊" value="是"/> 1.是</label>
                            <label className="normal-label"><input type="radio" name="本季度出诊" value="否"/> 2.否</label>
                            <label className="normal-label"><input type="radio" name="本季度出诊" value="从来不出门诊"/> 3.从来不出门诊</label>
                        </div>
                        <div className="reporter-line">A7. 如果您出门诊，请填写出门诊频率:
                            <label>每周出 <input type="text" name="出门诊频率"/> 个半天</label>
                        </div>
                        <div className="reporter-line">
                            A8. 平均每个半天看 <input type="text" name="诊断恶性肿瘤病人(人/半天)"/> 位恶性肿瘤病 ，其中初诊病人 <input type="text" name="初诊病人占比"/> %，复诊病人 <input type="text" name="复诊病人占比"/> %。
                        </div>
                        <div className="reporter-line">A9. 当前能接触到网络的场所
                            <label className="normal-label"><input type="radio" name="网络场所" value="家里"/> 1.家里</label>
                            <label className="normal-label"><input type="radio" name="网络场所" value="工作单位"/> 2.工作单位</label>
                            <label className="normal-label"><input type="radio" name="网络场所" value="两者都可以"/> 3.两者都可以</label>
                            <label className="normal-label"><input type="radio" name="网络场所" value="两者都不可以"/> 4.两者都不可以</label>
                        </div>
                        <div className="reporter-line">A10. E-mail地址:
                            <label className="text-label"><input type="text" name="email"/></label>
                        </div>
                        <div className="reporter-line">A11.通信地址:
                            <label className="text-label"><input type="text" name="地址"/></label>
                        </div>
                        <div className="reporter-line">A12.邮政编码:
                            <label className="text-label"><input type="text" name="邮编"/></label>
                        </div>
                        <TableQuestion></TableQuestion>
                    </div>
                </div>
                <div className="reporter-info">
                    <div className="reporter-title">二、报告人所在医院及科室信息</div>
                    <div className="reporter-content">
                        <div className="reporter-line">Q1.医院名称 <label className="text-label"><input type="text" anme="医院名称"/></label></div>
                        <div className="reporter-line">Q2.医院级别
                            <label className="normal-label"><input type="radio" name="医院级别" value="三级"/> 1. 三级</label>
                            <label className="normal-label"><input type="radio" name="医院级别" value="二级"/> 2. 二级</label>
                        </div>
                        <div className="reporter-line">Q3. 是否为肿瘤专科医院
                            <label className="normal-label"><input type="radio" name="是否为肿瘤专科医院" value="是"/> 1. 是</label>
                            <label className="normal-label"><input type="radio" name="是否为肿瘤专科医院" value="否"/> 2. 否</label>
                        </div>
                        <div className="reporter-line">Q4.是否为教学医院
                            <label className="normal-label"><input type="radio" name="是否为教学医院" value="是"/> 1.是</label>
                            <label className="normal-label"><input type="radio" name="是否为教学医院" value="否"/> 2.否</label>
                        </div>
                        <div className="reporter-line">Q5.是否有教学任务
                            <label className="normal-label"><input type="radio" name="是否有教学任务" value="是"/> 1.是</label>
                            <label className="normal-label"><input type="radio" name="是否有教学任务" value="否"/> 2.否</label>
                        </div>
                        <div className="reporter-line">Q6. 本院病床数
                            <label className="normal-label"><input type="radio" name="本院病床数" value="<250"/> 1. 小于250</label>
                            <label className="normal-label"><input type="radio" name="本院病床数" value="250-500"/> 2. 250-500</label>
                            <label className="normal-label"><input type="radio" name="本院病床数" value=">501"/> 3. 大于501</label>
                        </div>
                        <div className="reporter-line">Q7. 医院平均每年收治住院的肿瘤患者数 <input type="text" name="医院每年收治肿瘤患者数"/> 人</div>
                        <div className="reporter-line">Q8. 您所在科室平均每年收治的肿瘤患者数 <input type="text" name="科室每年收治肿瘤患者数"/> 人
                            <div>
                                <ul>
                                    <li>Q8.1.本科室肿瘤病人床位 <input type="text"/> 张</li>
                                    <li>Q8.2. 您所在科室医生数(主治及以上职称) <input type="text"/> 位</li>
                                </ul>
                            </div>
                        </div>
                        <div className="reporter-line">Q9. 您所在科室收治的主要肿瘤类型及病人比例
                            <label className="input-label">1. <input type="text" name="科室收治肿瘤类型占比"/> %</label>
                            <label className="input-label">2. <input type="text" name="科室收治肿瘤类型占比"/> %</label>
                            <label className="input-label">3. <input type="text" name="科室收治肿瘤类型占比"/> %</label>
                        </div>
                        <div className="reporter-line">S4. 您最擅长治疗的肿瘤类型是 <label className="text-label"><input type="text" name="最擅长肿瘤类型"/></label></div>
                        <div className="reporter-line">S5. 其次擅长治疗的肿瘤类型是 <label className="text-label"><input type="text" name="其次擅长"/></label></div>
                        <div className="reporter-line">S6. 每月您亲自负责的恶性肿瘤患者数(住院病人) <input type="text" name="恶性肿瘤患者数"/> 人</div>
                        <div className="reporter-line">S7. 您亲自负责的主要肿瘤类型及比例
                            <label className="input-label">1. <input type="text" name="亲自负责肿瘤类型占比"/> %</label>
                            <label className="input-label">2. <input type="text" name="亲自负责肿瘤类型占比"/> %</label>
                            <label className="input-label">3. <input type="text" name="亲自负责肿瘤类型占比"/> %</label>
                        </div>
                        <div className="reporter-line">M1. 邀请您参与本研究时，访员是否向您解释过IMS Health的数据保密声明?
                            <label className="normal-label"><input type="radio" name="解释保密" value="是"/> 1. 是</label>
                            <label className="normal-label"><input type="radio" name="解释保密" value="否"/> 2. 否</label>
                        </div>
                        <div className="reporter-line">M2. 完成6份病例的日期是 <input type="text" name="病例完成日期"/> 年 <input type="text" name="病例完成日期"/> 月 <input type="text" name="病例完成日期"/> 日</div>
                    </div>
                </div>
                <SixQuestions></SixQuestions>
                <Button class="finish-survey" buttonName="清空问卷"></Button>
                <Button class="finish-survey" buttonName="完成问卷"></Button>

            </div>
        );
    }
}

export default NewDoctorSurvey;
