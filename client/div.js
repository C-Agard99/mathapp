Template.divNum.onCreated(function divNumOnCreated(){
    this.num1 = new ReactiveVar(0);
    this.num2 = new ReactiveVar(0);
    });
                
        Template.divNum.helpers({
            num1(){
                return Template.instance().num1.get();
            },
            num2(){
                return Template.instance().num2.get();
            },
            ans(){
                return Template.instance().num1.get() / Template.instance().num2.get();
            }
        });
                
        Template.divNum.events({
            'click #js-diving'(event, instance) {
                instance.num1.set(parseInt(document.querySelector("#n1d").value));
                instance.num2.set(parseInt(document.querySelector("#n2d").value));
            }
        });
        