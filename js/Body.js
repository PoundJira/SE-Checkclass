import React, { Component } from 'react';
import InputBox from './elements/InputBox';
import RadioBox from './elements/RadioBox';
import TextBox from './elements/TextBox';
import AddUserHelper from './util/AddUser'
import { DatePicker, DatePickerInput } from 'rc-datepicker';
import 'rc-datepicker/lib/style.css';

class Body extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            re_password: "",
            title: "",
            name: "",
            surname: "",
            nation: "",
            race: "",
            id_card: "",
            address: "",
            phone: "",
            telephone: "",
            num_users: 0,
            file: null,
            error: "",
            dob: "",
            date: null
        };
        this.onChange = this.onChange.bind(this)

    }

    submitPress = (event) => {
        var addUserHelper = new AddUserHelper(this.state, this.props.load);
        addUserHelper.addUser(event);
    }

    handleChange = event => {
        const file = event.target.files[0];
        this.setState({ file });
    }

    updateInput = event => {
        this.setState({
            [event.target.name]: [event.target.value]
        });

    }

    onChange(date) {
        var dd = date.getDate();
        var mm = date.getMonth(); //January is 0!
        var yyyy = date.getFullYear() + 543;

        var lstMonth = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'];
        if (dd < 10) {
            dd = '0' + dd;
        }
        this.setState({
            date: date,
            dob: dd + ' ' + lstMonth[mm] + ' พ.ศ.' + yyyy
        });
    }
    // เพิ่ม User เข้าไปใน Authenticate 


    render() {
        return (
            <form onSubmit={this.submitPress}>
                <div class="container-fluid regis-box">
                    <div class="row" style={{ textAlign: "center", display: "inline" }}>
                        <h1>สมัครสมาชิก</h1>
                    </div>
                    <div class="row" style={{ textAlign: "center", display: "inline" }}>
                        <h3>ข้อมูลการเข้าสู่ระบบ</h3>
                    </div>
                    <div class="container">
                        <div class="row">
                            <InputBox class="col-md-6" label="อีเมลล์" name="email" type="email" updateInput={this.updateInput} placeholder="กรอกอีเมลล์ของท่าน" value={this.state.email} />
                        </div>
                        <div class="row">
                            <InputBox class="col-md-6" label="รหัสผ่าน" name="password" type="password" updateInput={this.updateInput} placeholder="กรอกรหัสผ่านของท่านมีจำนวน 8 ตัวอักษรขึ้นไป" value={this.state.password} />
                            <InputBox class="col-md-6" label="ยืนยันรหัสผ่าน" name="re_password" type="password" updateInput={this.updateInput} placeholder="ยืนยันรหัสผ่านที่ท่านกรอกมาในช่องก่อนหน้า" value={this.state.re_password} />
                        </div>
                    </div>
                    <div class="row" style={{ textAlign: "center", display: "inline" }}>
                        <h3>รายละเอียดส่วนบุคคล</h3>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>
                                        คำนำหน้าชื่อ*
                                </label>
                                    <div class="titleRadio" style={{ display: 'block' }} onChange={this.updateInput}>
                                        <RadioBox label="นาย" name="title" value="นาย" />
                                        <RadioBox label="นาง" name="title" value="นาง" />
                                        <RadioBox label="นางสาว" name="title" value="นางสาว" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <InputBox class="col-md-6" label="ชื่อ*" name="name" type="text" updateInput={this.updateInput} placeholder="กรุณากรอกชื่อของท่าน" value={this.state.name} />
                            <InputBox class="col-md-6" label="นามสกุล*" name="surname" type="text" updateInput={this.updateInput} placeholder="กรุณากรอกนามสกุลของท่าน" value={this.state.surname} />
                        </div>
                        <div class="row">
                            <InputBox class="col-md-6" label="สัญชาติ" name="nation" type="text" updateInput={this.updateInput} placeholder="กรุณากรอกสัญชาติของท่าน" value={this.state.nation} />
                            <InputBox class="col-md-6" label="เชื้อชาติ" name="race" type="text" updateInput={this.updateInput} placeholder="กรุณากรอกเชื้อชาติของท่าน" value={this.state.race} />
                        </div>
                        <div class="row">
                            <InputBox class="col-md-6" label="เลขบัตรประชาชน*" name="id_card" type="text" updateInput={this.updateInput} placeholder="กรุณากรอก เลขบัตรประชาชน/พาสปอร์ต ของท่าน" value={this.state.id_card} />
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>
                                        วดป เกิด
                                    </label>
                                    <DatePickerInput
                                        onChange={this.onChange}
                                        value={this.state.date}
                                        className='my-custom-datepicker-component'
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <TextBox label="ที่อยู่ปัจจุบัน*" name="address" updateInput={this.updateInput} placeholder="กรุณากรอกที่อยู่ปัจจุบันของท่าน" value={this.state.address} />
                        </div>
                        <label style={{ display: 'block' }}>
                            เบอร์โทรติดต่อ*
                        </label>
                        <div class="row">
                            <InputBox class="col-md-3" label="มือถือ" name="phone" type="text" updateInput={this.updateInput} placeholder="กรุณากรอกเบอร์โทรศัพท์มือถือของท่าน" value={this.state.phone} />
                            <InputBox class="col-md-3" label="บ้าน" name="telephone" type="text" updateInput={this.updateInput} placeholder="กรุณากรอกเบอร์โทรศัพท์บ้านของท่าน" value={this.state.telephone} />
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>
                                        รูปภาพโปรไฟล์
                                </label>
                                    <input class="form-control" type="file" onChange={this.handleChange} /><br />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row" style={{ textAlign: "center", display: "block" }}>
                        <button class="btn" type="submit">สมัครสมาชิก</button>
                    </div>
                </div>

            </form>
        );
    }


}
Number.prototype.pad = function (size) {
    var s = String(this);
    while (s.length < (size || 2)) { s = "0" + s; }
    return s;
}
export default Body;