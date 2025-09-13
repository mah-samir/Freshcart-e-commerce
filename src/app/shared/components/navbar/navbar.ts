import { Component, inject, Input, input } from '@angular/core';
import { FlowbiteService } from '../../../core/services/flowbite';
import { initFlowbite } from 'flowbite';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Auth } from '../../../core/auth/auth';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
constructor(private flowbiteService: FlowbiteService) {}
  @Input({required:true}) islogin!:boolean
  private readonly auth = inject(Auth)

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite((flowbite) => {
      initFlowbite();
    });
  }

  signOut():void{
    this.auth.logOut()
  }
}
