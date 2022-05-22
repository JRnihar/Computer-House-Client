import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div class="accordion flex flex-col items-center justify-center pt-10 pb-10 ">
            
            <div class="w-1/2">
                <input type="checkbox" name="panel" id="panel-1" class="hidden"/>
                    <label for="panel-1" class="relative block bg-black text-white p-4 shadow border-b border-grey">#QUESTION 1</label>
                    <div class="accordion__content overflow-hidden bg-grey-lighter">
                    <h2 class="accordion__header pt-4 pl-4">How will you improve the performance of a React Application?</h2>
                    <p class="accordion__body p-4" id="panel1">Using React in application brings better performance and minimizes the number of DOM operations used to build faster user interfaces as it was built keeping performance in mind.The browsers provide this feature in dev tools and allow us to audit the application. This includes measuring the performance of React applications. Another way is by analyzing React components with Chrome’s performance tab.</p>
                    </div>
            </div>
           
            <div class="w-1/2">
                <input type="checkbox" name="panel" id="panel-2" class="hidden"/>
                <label for="panel-2" class="relative block bg-black text-white p-4 shadow border-b border-grey">#QUESTION 2</label>
                    <div class="accordion__content overflow-hidden bg-grey-lighter">
                    <h2 class="accordion__header pt-4 pl-4">What are the different ways to manage a state in a React application?</h2>
                    <p class="accordion__body p-4">The state helps in keeping the data of different components in sync since each state update will re-render all relevant components. It can also act as a medium to communicate between various components. Managing state is one of the hardest parts of any application, and that is why there are so many state management libraries/tools available, including Redux, MobX, Flux, RxJS, and more.URLs represent a hierarchy of components, overlaid on one top of the other. One can build a location tree using different URLs that represent different parts of your application.</p>
                    </div>
            </div>
            
            <div class="w-1/2">
                <input type="checkbox" name="panel" id="panel-3" class="hidden"/>
                <label for="panel-3" class="relative block bg-black text-white p-4 shadow border-b border-grey">#QUESTION 3</label>
                    <div class="accordion__content overflow-hidden bg-grey-lighter">
                    <h2 class="accordion__header pt-4 pl-4">How does prototypical inheritance work?</h2>
                    <p class="accordion__body p-4">The core idea of Prototypal Inheritance is that an object can point to another object and inherit all its properties. The main purpose is to allow multiple instances of an object to share common properties, hence, the Singleton Pattern.Simply put, prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.</p>
                    </div>
            </div>
            <div class="w-1/2">
                <input type="checkbox" name="panel" id="panel-4" class="hidden"/>
                <label for="panel-4" class="relative block bg-black text-white p-4 shadow border-b border-grey">#QUESTION 4</label>
                    <div class="accordion__content overflow-hidden bg-grey-lighter">
                    <h2 class="accordion__header pt-4 pl-4">Why you do not set the state directly in React.?</h2>
                    <p class="accordion__body p-4">It’s obvious from the statement that if we mutate the state directly, it will change the reference of the state in the previous virtual DOM as well. So, React won’t be able to see that there is a change of the state and so it won’t be reflected in the original DOM until we reload. The problem is more obvious when we extend a component with React.PureComponent instead of where React tries to optimize some time by not rendering components if no changes are found.
                        Also, mutating the state directly can lead to odd bugs and components that are hard to optimize.</p>
                    </div>
            </div>
            <div class="w-1/2">
                <input type="checkbox" name="panel" id="panel-5" class="hidden"/>
                <label for="panel-5" class="relative block bg-black text-white p-4 shadow border-b border-grey">#QUESTION 5</label>
                    <div class="accordion__content overflow-hidden bg-grey-lighter">
                    <h2 class="accordion__header pt-4 pl-4">What is a unit test? Why should write unit tests?</h2>
                    <p class="accordion__body p-4">A unit test typically comprises of three stages: plan, cases and scripting and the unit test itself. In the first step, the unit test is prepared and reviewed. The next step is for the test cases and scripts to be made, then the code is tested.<br/>
                        Unit tests save time and money. Usually, we tend to test the happy path more than the unhappy path. If you release such an app without thorough testing, you would have to keep fixing issues raised by your potential users. The time to fix these issues could’ve been used to build new features or optimize the existing system. Bear in mind that fixing bugs without running tests could also introduce new bugs into the system.</p>
                    </div>
            </div>
        </div>
    );
};

export default Blog;