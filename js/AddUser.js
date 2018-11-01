import firebase from '../../../controller/firebase_init/firebase';
import Validate from './Validate';
import swal from 'sweetalert2';

class AddUserHelper{
    constructor(state, load){
        this.state = state;
        this.load = load
        this.validateHelper = new Validate(this.state);
    }

    addUser = event => {
        const db = firebase.firestore();
        const storageRef = firebase.storage().ref();
        event.preventDefault();
        const email = String(this.state.email);
        const password = String(this.state.password);
        const re_password = String(this.state.re_password);
        var canCreate = true;
        if (this.validateHelper.handleValidation()) {
            if (password == re_password && password.length >= 8) {
                Promise.resolve(firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then((resp) => {
                        console.log(resp.user.uid)
                        db.collection('users').doc('user' + (this.load + 1).pad(6)).set({
                            email: String(this.state.email),
                            password: String(this.state.password),
                            title: String(this.state.title),
                            name: String(this.state.name),
                            surname: String(this.state.surname),
                            nation: String(this.state.nation),
                            race: String(this.state.race),
                            id_card: String(this.state.id_card),
                            address: String(this.state.address),
                            phone: String(this.state.phone),
                            telephone: String(this.state.telephone),
                            id: (this.load + 1).pad(6),
                            id_dog: [],
                            uid:resp.user.uid,
                            dob:this.state.dob,
                            date:this.state.date
                        })
                            .then(
                                function (resp2) {
                                    swal({
                                        position: 'center',
                                        type: 'success',
                                        title: 'คุณทำการสมัครสมาชิกเสร็จสิ้น',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                }
                            )
                        if (this.state.file != null) {
                            storageRef.child(`users_profile/${'user' + (this.load + 1).pad(6)}`)
                                .put(this.state.file)
                        }
                    }
                    )
                    .catch((error) => {
                        console.log(error);
                        swal({
                            position: 'center',
                            type: 'error',
                            title: 'คุณทำการสมัครสมาชิกล้มเหลว',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                    ));
            } else if (password.length < 8) {
                swal({
                    position: 'center',
                    type: 'error',
                    title: 'กรุณากรอกรหัสผ่านให้ครบ 8 ตัว',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
            else {
                swal({
                    position: 'center',
                    type: 'error',
                    title: 'กรุณายืนยันรหัสผ่านให้ถูกต้อง',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        } else {
            swal({
                position: 'center',
                type: 'error',
                title: this.state.error,
                showConfirmButton: false,
                timer: 1500
            })
        }
    }
}

export default AddUserHelper;