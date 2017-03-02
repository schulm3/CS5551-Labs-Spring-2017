package com.example.mark.sample;

/**
 * Created by Mark on 3/2/2017.
 */
import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

public class SecondaryActivity extends Activity{
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.my_freakin_activity_layout);

        String myUserName= null;
        String myPassword= null;

        if (getIntent().hasExtra("username")){
            myUserName = getIntent().getStringExtra("username");
        }else{
            //throw new IllegalArgumentException{...}
        }
        if (getIntent().hasExtra("password")){
            myPassword = getIntent().getStringExtra("password");
        }

        TextView showUsername= (TextView) findViewById(R.id.showUsername);
        TextView showPassword= (TextView) findViewById(R.id.showPassword);

        showUsername.setText(myUserName);
        showPassword.setText(myPassword);
    }
}
