class Content {
    constructor($target)
    {
        this.$target = $target;
        this.data = [];
        this.get_data(new Date(), -1);
        this.render();
    }

    get_data(base_date, category)
    {
        /*

        base_date 시간 이전에 category에 저장된 100개의 데이터를 얻어온다.

        */
    }

    render()
    {
        /*

        this.data에 저장된 100개의 아이템들을 렌더링한다.

        */
    }
}

class Textarea {
    constructor($target)
    {
        this.$target = $target;
        this.textarea_obj = $target.querySelector("textarea");
        this.button_obj = $target.querySelector("button");
        this.textarea_obj.addEventListener("input", ()=>this.reset_textarea_height());
        this.button_obj.addEventListener("click", ()=>this.send());
    }

    reset_textarea_height()
    {
        this.textarea_obj.style.height = this.textarea_obj.value === "" ? "26px" : this.textarea_obj.scrollHeight + 'px';
        this.button_obj.style.height = this.textarea_obj.style.height;
        document.documentElement.style.setProperty('--input-height', this.textarea_obj.clientHeight+'px');        
    }

    send()
    {
        /*

        fetch()로 서버에 업데이트 한다.

        */
        this.textarea_obj.value = "";
        this.reset_textarea_height();
    }
}


const content = new Content(document.querySelector("main > div.content"));
const textarea = new Textarea(document.querySelector("main > div.textarea"));