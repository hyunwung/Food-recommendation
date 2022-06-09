class Login {

    constructor(form, fields) {
        this.form = form
        this.fields = fields
        this.validateonSubmit()
    }

    validateonSubmit() {
        let self = this;

        this.form.addEventListener("submit", (e) => {
            e.preventDefault()
            var error = 0
            self.fields.forEach((field) => {
                const input = document.querySelector(`#${field}`)

                if(self.validateFields(input) == false) {
                    error++
                }
            });
            
            if(error == 0) {
                // 오류가 없다면, 데이터 전송
                this.form.submit()
            }
            
        });
    }

    validateFields(field) {
        console.log(field.title)
        // 빈칸 체크
        if(field.value.trim() == '') {
            this.setStatus(
                field,
                `${field.title}를 입력해주세요.`,
                "error"
            )
            return false

        } else {
            // 비밀번호 글자수 체크
            if(field.type == 'password') {
                if(field.value.length < 8) {
                    this.setStatus(
                        field,
                        `${field.title}를 최소 8자리 이상 입력해주세요. `,
                        "error"
                    )
                    return false
                } else {
                    this.setStatus(field, null, "success")
                    return true
                }
            } else {
                this.setStatus(field, null, "success")
                return true
            }

        }
        
    } 

    setStatus(field, message, status) {
        
        const errorMessage = field.parentElement.querySelector('.error_next_box')

        if(status == 'success') {
            if(errorMessage) {
                errorMessage.innerText = ''
            }
            field.classList.remove('input-error')
        }

        if(status == 'error') {
            errorMessage.innerText = message
            field.classList.add('input-error')
        }
    }


}

const form = document.querySelector('.loginForm')
if(form) {
    const fields = ['username', 'password']
    const validator = new Login(form, fields)
}



