using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SpinCollider : MonoBehaviour
{
    private float speed = 0f;
    //rotate this GameObject
    void Update()
    {
        var angle = Time.deltaTime * speed;
        transform.Rotate(new Vector3(angle, 0f, 0f), Space.Self);
    }

    //Upon collision with another GameObject, this GameObject will reverse direction
    private void OnTriggerEnter(Collider other)
    {
        speed = 2f;
    }
}
