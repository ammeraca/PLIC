using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ModelSwitch : MonoBehaviour
{
    private int index;
    private GameObject current;
    public List<GameObject> gameObjects = new List<GameObject>();

    // Start is called before the first frame update
    void Start()
    {
        current = Instantiate(gameObjects[index], transform);
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.A) && gameObjects.Count > 1)
        {
            Debug.Log("switching");
            DestroyImmediate(current, true);
            index = (index + 1) % gameObjects.Count;
            current = Instantiate(gameObjects[index], transform);
        }
    }
}
