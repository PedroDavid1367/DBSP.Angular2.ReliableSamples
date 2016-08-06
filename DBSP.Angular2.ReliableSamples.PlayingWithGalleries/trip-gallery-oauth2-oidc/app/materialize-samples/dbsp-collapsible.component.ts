import { Component }             from '@angular/core';
import { MaterializeDirective }  from "angular2-materialize";

@Component({
  selector: 'dbsp-collapsible',
  template: `
  <ul materialize="collapsible" class="collapsible popout" data-collapsible="accordion">
    <li>
      <div class="collapsible-header"><i class="material-icons">info_outline</i>First</div>
      <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
    </li>
    <li>
      <div class="collapsible-header"><i class="material-icons">input</i>Second</div>
      <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
    </li>
    <li>
      <div class="collapsible-header"><i class="material-icons">label</i>Third</div>
      <div class="collapsible-body">
        <p>Lorem ipsum dolor sit amet.</p>

        <div class="row">
          <!-- I think this would be a nice component --> 
          <div class="col m12">
            <div class="card blue-grey darken-1">
              <div class="card-content white-text">
                <span class="card-title">Card Title</span>
                <p>
                  I am a very simple card. I am good at containing small bits of information.
                  I am convenient because I require little markup to use effectively.
                </p>
              </div>
              <div class="card-action">
                <a href="#">This is a link</a>
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
          <!-- End of component -->

          <div class="col m12">
            <div class="card blue-grey darken-1">
              <div class="card-content white-text">
                <span class="card-title">Card Title</span>
                <p>
                  I am a very simple card. I am good at containing small bits of information.
                  I am convenient because I require little markup to use effectively.
                </p>
              </div>
              <div class="card-action">
                <a href="#">This is a link</a>
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  </ul>

  <!-- Modal Trigger -->
  <a materialize="leanModal" class="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>
  <!-- Modal Structure -->
  <div id="modal1" class="modal">
    <div class="modal-content">
      <h4>Modal Header</h4>
      <p>A bunch of text</p>
    </div>
    <div class="modal-footer">
      <a href="home" class=" modal-action modal-close waves-effect waves-green btn-flat">To home</a>
      <a href="trips" class=" modal-action modal-close waves-effect waves-green btn-flat">To trips</a>
    </div>
  </div>
  `,
  directives: [MaterializeDirective]
})
export class DbspCollapsibleComponent {}

